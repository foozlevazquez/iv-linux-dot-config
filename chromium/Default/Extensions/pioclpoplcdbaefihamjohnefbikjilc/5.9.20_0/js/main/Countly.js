function ValueNode(value) {
  this.count = 0;
  this.children = {};
  this.value = value;
  Object.preventExtensions(this);
}
Object.preventExtensions(ValueNode);

function SegmentNode(name) {
  this.name = name;
  this.children = {};
  Object.preventExtensions(this);
}
Object.preventExtensions(SegmentNode);

var Countly = {};
(function() {
  var stageAppKey = "1bfd9d6bbfde688a0130d46c775de9a5db7d116a";
  var stageAppHost = "http://countly-test-api.herokuapp.com";
  var prodAppKey = "9fc978f1a4f4b0bdb5f0972b0c466a7e33f63de8";
  var prodAppHost = "https://enmac.stats.evernote.com";
  var appKey;
  var appHost;
  var os = parseUserAgent(navigator.userAgent);
  var userId;

  var x = new XMLHttpRequest();
  var timeout;
  var events = {};

  Countly.recordEvent = function(key, segmentation) {
    if (shouldTrack()) {
      if (!events[key]) {
        events[key] = new ValueNode();
      }

      var countee = events[key];
      if (segmentation) {
        for (var sKey in segmentation) {
          var sValue = segmentation[sKey];
          if (!countee.children[sKey]) {
            countee.children[sKey] = new SegmentNode(sKey);
          }
          if (!countee.children[sKey].children[sValue]) {
            countee.children[sKey].children[sValue] = new ValueNode(sValue);
          }
          countee = countee.children[sKey].children[sValue];
        }
      }
      countee.count++;
    }
  };

  function marshall(e, node, key, path, segmentKey) {
    if (node.count) {
      var marshalled = { key: key, count: node.count };
      if (path) {
        marshalled.segmentation = path;
      }
      e.push(marshalled);
    }
    if (!path) {
      path = {};
    }
    for (var k in node.children) {
      if (node.children[k].constructor == SegmentNode) {
        marshall(e, node.children[k], key, JSON.parse(JSON.stringify(path)), k);
      } else {
        var newPath = JSON.parse(JSON.stringify(path));
        newPath[segmentKey] = k;
        marshall(e, node.children[k], key, newPath);
      }
    }
  }

  function sendEvents(callback) {
    var e = [];
    for (var key in events) {
      marshall(e, events[key], key);
    }
    events = {};
    clearTimeout(timeout);
    timeout = setTimeout(sendEvents, 5 * 60 * 1000);
    if (e.length > 0) {
      x.open("GET", appHost + "/i?app_key=" + appKey + "&device_id=" + userId
        + "&events=" + encodeURIComponent(JSON.stringify(e)), true);
      if (callback) {
        x.onreadystatechange = function() {
          if (x.readyState == 4) {
            callback();
          }
        };
      }
      x.send();
    } else {
      if (callback) {
        callback();
      }
    }
  }

  Countly.startSession = function(_userId, prod) {
    if (userId) {
      Countly.endSession(userId);
    }
    if (prod) {
      appKey = prodAppKey;
      appHost = prodAppHost;
    } else {
      appKey = stageAppKey;
      appHost = stageAppHost;
    }

    userId = _userId;
    if (shouldTrack()) {
      var metrics = {
        "_os": os.os,
        "_os_version": os.version,
        "_device": SAFARI ? "Safari" : "Google Chrome",
        "_app_version": Browser.EVERNOTE_VERSION
      };
      x.open("GET", appHost + "/i?app_key=" + appKey + "&device_id=" + userId
        + "&begin_session=1&sdk_version=1&metrics="
        + encodeURIComponent(JSON.stringify(metrics)), true);
      x.send();
      timeout = setTimeout(sendEvents, 5 * 60 * 1000);
    }
  };

  Countly.endSession = function(_userId) {
    if (shouldTrack()) {
      sendEvents(function() {
        x.open("GET", appHost + "/i?app_key=" + appKey + "&device_id=" + _userId + "&end_session=1", true);
        x.send();
      });
    }
  };

  function parseUserAgent(userAgent) {
    var os = "Unknown";
    var version = "Unknown";
    if (/macintosh/i.test(userAgent)) {
      os = "Mac";
      if (/Macintosh;.[^\d]+([\d_][^);]+)/.test(userAgent)) {
        version = /Macintosh;.[^\d]+([\d_][^);]+)/.exec(userAgent)[1].replace(/_/g, ".");
      }
    } else if (/windows/i.test(userAgent)) {
      os = "Windows";
      var m = userAgent.match(/Windows NT (.+);/);
      if (m) {
        switch (m[1]) {
          case "3.1":
            version = "NT 3.1";
            break;
          case "3.5":
            version = "NT 3.5";
            break;
          case "3.51":
            version = "NT 3.51";
            break;
          case "4.0":
            version = "NT 4.0";
            break;
          case "5.0":
            version = "2000";
            break;
          case "5.1":
            version = "XP";
            break;
          case "5.2":
            version = "XP";
            break;
          case "6.0":
            version = "Vista";
            break;
          case "6.1":
            version = "7";
            break;
          case "6.2":
            version = "8";
            break;
        }
      }
    } else if (/linux/i.test(userAgent)) {
      os = "Linux";
    }

    return { os: os, version: version };
  }

  Countly.isActive = function(_userId) {
    return userId == _userId;
  };

  function shouldTrack() {
    if (userId) {
      if (parseInt(userId) % 150 == 0) {
        return true;
      }
    }
    return false;
  }
})();