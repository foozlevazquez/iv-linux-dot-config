var JsonQueue = {};
(function() {
  "use strict";

  var shards = {};

  function initShard(shardId) {
    if (!shards[shardId]) {
      shards[shardId] = { expensiveOpInflight: false, queue: [], timeout: 0 };
    }
  }

  JsonQueue.handleExpensiveOpRequest = function(attrs, func) {
    var params = Array.prototype.slice.call(arguments);
    params.shift();
    params.shift();
    var shardId = attrs.shardId;
    var userId = attrs.userId;
    initShard(shardId);

    // change callback
    for (var p in params) {
      if (typeof params[p] == "function") {
        var origFn = params[p];
        params[p] = function(response, exception) {
          clearTimeout(shards[shardId].timeout);
          // save in cache
          if (response) {
            if (params.length == 3) { // NoteStoreExtra.getFilingRecommendation
              if (params[2].query) {
                SimsearchCache.add(attrs.userId, attrs.type, params[2].query, JSON.parse(JSON.stringify(response)));
              } else if (params[2].url) {
                FilRecCache.add(attrs.userId, attrs.type, params[2].url, JSON.parse(JSON.stringify(response)));
              }
            }
          }
          JsonQueue.handleExpensiveOpComplete(shardId);
          origFn(response, exception);
        }
        break;
      }
    }

    if (shards[shardId].expensiveOpInflight) {
      // op needs to get in line
      shards[shardId].queue.push({attrs: attrs, func: func, args: params});
    }
    else {
      if (shards[shardId].queue.length > 0) {
        // get in line and let the others who've been waiting go
        shards[shardId].queue.push({attrs: attrs, func: func, args: params});
      }
      else {
        // run it immediately
        run(this, attrs, func, params);
      }
    }
  };

  JsonQueue.handleExpensiveOpComplete = function(shardId) {
    if (shards[shardId].queue.length > 0) {
      // process next op
      var op = shards[shardId].queue.shift();
      run(this, op.attrs, op.func, op.args);
    }
    else {
      shards[shardId].expensiveOpInflight = false;
    }
  };

  JsonQueue.getShards = function() {
    return shards;
  }

  function run(context, a, f, p) {
    shards[a.shardId].expensiveOpInflight = true;
    var cached;
    if (p.length == 3) { // NoteStoreExtra.getFilingRecommendation
      // check cache
      if (p[2].query) {
        cached = SimsearchCache.get(a.userId, a.type, p[2].query);
      } else if (p[2].url) {
        cached = FilRecCache.get(a.userId, a.type, p[2].url);
      }
    }
    if (cached) {
      for (var pi in p) {
        if (typeof p[pi] == "function") {
          p[pi](cached);
          return;
        }
      }
    }
    shards[a.shardId].timeout = setTimeout(function() {
      JsonQueue.handleExpensiveOpComplete(a.shardId);
    }, 10 * 1000);

    f.apply(context, p);
  }

  Object.preventExtensions(JsonQueue);
})();