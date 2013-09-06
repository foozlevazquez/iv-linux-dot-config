// This class manages authentication of a user and is queryable locally or via message passing.

function Auth() {

  var bootstrapInfo = new BootstrapInfo();

  // This is where we can find 'userStore' online.
  var rpcUrl = extension.getOption("secureProto") + bootstrapInfo.get("serviceHost") + "/json";
  var rpc = {}; // Actual RPC objects.

  // Map of display names to user info objects.
  var userInfo = {};
  var currentUser = null;

  // Number of seconds we're *AHEAD* of the server.
  var authTimeOffset = 0;

  // List of callbacks to call after a login attempt.
  var callbacks = [];

  // timeout object to give up on failed logins;
  var timeout = 0;

  // This is set while operations are in progress so that we won't have confusing overlapping requests.
  var busy = false;

  // Don't change this or it will break people's saved login info.
  var cryptKey = "asrogugybevladrvbowergblkdvnafyuversouvhsdflvaeruabsdubseruvy";

  function xorcrypt(string) {
    if (!string) return;
    var effectiveCryptKey = cryptKey;
    var encString = "";
    while (effectiveCryptKey.length < string.length) {
      effectiveCryptKey += cryptKey;
    }
    effectiveCryptKey = effectiveCryptKey.substr(0, string.length);
    for (var i = 0; i < string.length; i++) {
      var key = effectiveCryptKey.charCodeAt(i);
      var val = string.charCodeAt(i);
      var xored = key ^ val;
      encString += String.fromCharCode(xored);
    }
    return encString;
  }

  function loadSavedAuth() {
    var savedAuth = Persistent.get("savedAuthInfo");
    userInfo = {};
    currentUser = "";
    if (!savedAuth || !savedAuth.currentUser || !savedAuth.userInfo) {
      Persistent.set("savedAuthInfo", {});
      // Nothing saved.
      return;
    }

    currentUser = savedAuth.currentUser;
    for (var i in savedAuth.userInfo) {
      try {
        userInfo[i] = savedAuth.userInfo[i];
      }
      catch (e) {
        console.warn("Couldn't restore credentials for user " + i);
      }
    }

    if (!userInfo[currentUser]) {
      console.warn("No entry for saved user, picking another.");
      for (var i in userInfo) {
        currentuser = i;
        saveAuth();
        break;
      }
    }
  }

  function saveAuth() {
    var info = {};
    for (var i in userInfo) {
      // deep-copy.
      var copy = JSON.parse(JSON.stringify(userInfo[i]));
      info[i] = copy;
    }
    Persistent.set("savedAuthInfo", {userInfo: info, currentUser: currentUser});
  }

  function login(_username, _password, callback) {
    if (callback) callbacks.push(callback);
    if (busy) return;
    busy = true;

    if (SAFARI) {
      getRpc().client.UserStore.authenticateLongSession(handleLogin, _username,
        _password, "en-safari-clipper-xauth-new", "1fbffc8cf53bd605", Persistent.get("deviceID"),
        parseUserAgent(navigator.userAgent), true);
    } else if (OPERA) {
      getRpc().client.UserStore.authenticateLongSession(handleLogin, _username,
        _password, "en-opera-clipper-xauth-new", "bda9ae45efd276dc", Persistent.get("deviceID"),
        parseUserAgent(navigator.userAgent), true);
    } else {
      getRpc().client.UserStore.authenticateLongSession(handleLogin, _username,
        _password, "en-chrome-clipper-xauth-new", "57542b7c39ab82e9", Persistent.get("deviceID"),
        parseUserAgent(navigator.userAgent), true);
    }

    // We let this run for 30 seconds, and then we will kill it.
    timeout = setTimeout(loginTimeout, 30000);
  }

  function loginTimeout() {
    for (var i = 0; i < callbacks.length; i++) {
      runCallback(i, {authenticationToken: null, error: "TIMEOUT"});
    }
    callbacks = [];
    busy = false;
  }

  function runCallback(idx, arg) {
    try {
      callbacks[idx](arg);
    }
    catch (e) {
      log.warn("Got error running login callback: " + JSON.stringify(e));
    }
  }

  function failLogin(exception) {
    console.log("failed login: ", exception.trace);
    var error = resolveError(exception);

    function postLogout() {
      for (var i = 0; i < callbacks.length; i++) {
        runCallback(i, { error: error });
      }
      callbacks = [];
      busy = false; // Not busy any more.
    }

    postLogout();
  }

  function handleLogin(result, exception) {
    // If we've already cancelled this event, we'll do nothing here.
    if (!busy) return;
    if (timeout) clearTimeout(timeout);

    // Successful login.
    if (result) {
      if (result.secondFactorRequired) {
        for (var i = 0; i < callbacks.length; i++) {
          runCallback(i, { authenticationToken: result.authenticationToken,
            secondFactorDeliveryHint: result.secondFactorDeliveryHint,
            expiration: result.expiration });
        }
        callbacks = [];
        busy = false; // Not busy any more.
      } else if (result.user && result.user.id) {
        authTimeOffset = (new Date().getTime()) - result.currentTime;
        currentUser = result.user.id.toString();
        userInfo[currentUser] = {};
        userInfo[currentUser].username = result.user.username;
        userInfo[currentUser].authenticationToken = result.authenticationToken;
        userInfo[currentUser].expiration = result.expiration;
        userInfo[currentUser].premium = result.user.premiumInfo.premium;
        userInfo[currentUser].shardId = result.user.shardId;
        if (result.user.businessUserInfo) {
          userInfo[currentUser].businessId = result.user.businessUserInfo.businessId;
          getRpc().client.UserStore.authenticateToBusiness(handleBusinessLogin,
            result.authenticationToken);
        } else {
          saveAuth();

          for (var i = 0; i < callbacks.length; i++) {
            runCallback(i, { authenticationToken: result.authenticationToken,
              username: result.user.username, userId: currentUser, error: false });
          }
          callbacks = [];
          busy = false; // Not busy any more.
        }
        Browser.setTitle(Browser.i18n.getMessage("BrowserActionTitle"));
        Browser.setIcon("images/web-clipper");

        // setup on analytics
        Countly.startSession(currentUser, !/stage/.test(bootstrapInfo.get("serviceHost")));
      }
    }
    // Failure to login. Reset everything.
    else {
      failLogin(exception);
    }
  }

  function handleBusinessLogin(result, exception) {
    if (result) {
      if (userInfo[currentUser]) {
        userInfo[currentUser].bizAuthenticationToken = result.authenticationToken;
        userInfo[currentUser].bizExpiration = result.expiration;
      }
      else {
        console.warn("Got business login for unknown user. Discarding.");
      }

      saveAuth();

      for (var i = 0; i < callbacks.length; i++) {
        runCallback(i, { authenticationToken: userInfo[currentUser].authenticationToken,
          bizAuthenticationToken: result.authenticationToken,
          username: userInfo[currentUser].username, userId: currentUser, error: false});
      }
      callbacks = [];
      busy = false; // Not busy any more.
    }
    else {
      failLogin(exception);
    }
  }

  function resolveError(exception) {
    // The dewfault unknown error.
    if (!exception) {
      return "UNKNOWN";
    }

    // If we have a useful code, we'll resolve a name from that.
    if (typeof exception.code === "number") {
      var code = exception.code;
      switch (code) {
        case 0: return "NETWORK";
        case 503: return "HTTP/503";
        case 490: break; // The case we usually see for app-layer exceptions.

        default:
      }
    }

    // Otherwise, we'll try parsing some text.
    var fields = ["name", "trace"];
    for (var i = 0; i < fields.length; i++) {
      if (exception[fields[i]]) {
        var field = exception[fields[i]];
        var match = field.match(/errorCode:(\w+)/);
        if (match) {
          switch (match[1]) {
            case "DATA_REQUIRED": 
              if (field.match(/parameter:password/)) return "PASSWORD_REQUIRED";
              if (field.match(/parameter:username/)) return "USERNAME_REQUIRED";
              return "DATA_REQUIRED";
            case "INVALID_AUTH":
              if (field.match(/parameter:password/)) return "INVALID_PASSWORD";
              if (field.match(/parameter:username/)) return "INVALID_USERNAME";
              if (field.match(/parameter:oneTimeCode/)) return "INVALID_TWO_STEP_CODE";
              return "INVALID_AUTH";
            case "PERMISSION_DENIED":
              if (field.match(/parameter:.*tooManyFailures/)) return "TOO_MANY_FAILURES";
              if (field.match(/parameter:.*User.active/)) return "ACCOUNT_DEACTIVATED";
              if (field.match(/parameter:authenticationToken/)) return "EXPIRED_AUTHENTICATION_TOKEN";
              return "PERMISSION_DENIED";
            case "AUTH_EXPIRED":
              if (field.match(/parameter:password/)) return "EXPIRED_PASSWORD";
              if (field.match(/parameter:authenticationToken/)) return "EXPIRED_AUTHENTICATION_TOKEN";
              return "AUTH_EXPIRED";
            case "BAD_DATA_FORMAT":
              if (field.match(/parameter:username/)) return "INVALID_USERNAME";
              return "INVALID_AUTH";
            default:
              console.log("Found unhandled error condition: " + match[1] + field + " while logging in.");
              return "UNKNOWN";
          }
        }
      }
    }

    // Still nothing?
    console.log("nothing");
    return "UNKNOWN";
  }

  function authFresh(authResult) {
    if (!authResult.expiration) return false;
    var now = new Date().getTime();
    now -= authTimeOffset;

    // We'll say that our auth is stale if we're within three minutes of having it expire. This avoids the problem of
    // finding that it's fresh but expiring in a second or two and having it expire by the time a clip is actually
    // made).
    if (now > (authResult.expiration - (3 * 60 * 1000))) return false;
    return true;
  }

  function bizAuthFresh(authResult) {
    if (!authResult.bizExpiration) return false;
    var now = new Date().getTime();
    now -= authTimeOffset;

    // We'll say that our auth is stale if we're within three minutes of having it expire. This avoids the problem of
    // finding that it's fresh but expiring in a second or two and having it expire by the time a clip is actually
    // made).
    if (now > (authResult.bizExpiration - (3 * 60 * 1000))) return false;
    return true;
  }

  function isAuthenticated(callback) {
    function handleBusinessRefresh(response, exception) {
      if (response) {
        userInfo[currentUser].bizAuthenticationToken = response.authenticationToken;
        userInfo[currentUser].bizExpiration = response.expiration;
        saveAuth();

        callbackArgs["bizAuthenticationToken"] = response.authenticationToken;
        callbackArgs["bizExpiration"] = response.expiration;
        callback(callbackArgs);
      } else {
        console.debug("problem refreshing business auth token: ", exception.trace);
        if (exception.trace) { // don't log out if the network is just down
          logoutUser(currentUser, function() {callback(null);});
        }
      }
    }

    var ui = getUserInfo();
    if (ui.authenticationToken && authFresh(ui)) {
      if (!Countly.isActive(currentUser)) {
        Countly.startSession(currentUser, !/stage/.test(bootstrapInfo.get("serviceHost")));
      }
      var callbackArgs = { username: ui.username, authenticationToken: ui.authenticationToken,
        userId: currentUser, shardId: ui.shardId, premium: ui.premium };
      if (ui.bizAuthenticationToken) {
        callbackArgs["businessId"] = ui.businessId;
        if (bizAuthFresh(ui)) {
          callbackArgs["bizAuthenticationToken"] = ui.bizAuthenticationToken;
          callbackArgs["bizExpiration"] = ui.bizExpiration;
          callback(callbackArgs);
        } else {
          getRpc().client.UserStore.authenticateToBusiness(handleBusinessRefresh,
            ui.authenticationToken);
        }
      } else {
        callback(callbackArgs);
      }
    } else {
      callback(null);
    }
  }

  function logoutAll() {
    while (currentUser) {
      logout(null);
    }
  }

  function logoutUser(user, callback) {
    setCurrentUser(user);
    logout(callback);
  }

  function logout(callback, authExpired) {
    if (!authExpired) {
      getRpc().client.UserStore.revokeLongSession(function(r,e) {
        if (e) {
          console.debug("problem revoking auth token: ", e.trace);
        }
      }, userInfo[currentUser].authenticationToken);
    }
    Countly.endSession(currentUser);
    delete userInfo[currentUser];
    currentUser = "";
    for (var i in userInfo) {
      currentUser = i;
      break;
    }
    saveAuth();

    authTimeOffset = 0;
    if (callback) {
      try {
        callback();
      }
      catch (e) {
        console.debug("Error running logout callback. " + JSON.stringify(e));
      }
    }

    if (Object.keys(userInfo).length == 0) {
      Browser.setTitle(Browser.i18n.getMessage("signInPrompt"));
      Browser.setIcon("images/web-clipper-sign-in");
    }
  }

  // Returns the current authentication token, or potentially tries to renew the authentication token and return the new
  // one.
  // If called with 'callback', the resulting auth token will be passed to 'callback'.
  // If called without 'autoRenew, the resulting auth token will also be returned directly.
  // It is an error to specify 'autoRenew' without also specifying a callback.
  // if 'autoRenew' is specified, 'null' will be returned, you must rely on 'callback' for your auth token.
  function getAuthTokens(callback) {
    var info = getUserInfo();
    if (info.authenticationToken) {
      var tokens = {
        authenticationToken: info.authenticationToken
      };
      if (info.bizAuthenticationToken) {
        if (new Date() + 3 * 60 * 1000 > info.bizExpiration) {
          getRpc().client.UserStore.authenticateToBusiness(function(r, e) {
            if (r) {
              userInfo[currentUser].bizAuthenticationToken = r.authenticationToken;
              userInfo[currentUser].bizExpiration = r.expiration;
              saveAuth();

              tokens.bizAuthenticationToken = r.authenticationToken;
              callback(tokens);
            } else {
              console.debug("problem refreshing business token: ", e.trace);
              if (e.trace) { // don't log out if the network is just down
                logoutUser(currentUser, function() {callback(null);});
              }
            }
          }, info.authenticationToken);
        } else {
          tokens.bizAuthenticationToken = info.bizAuthenticationToken;
          callback(tokens);
        }
      } else {
        callback(tokens);
      }
    } else {
      callback(null);
    }
  }

  function setCurrentUser(user) {
    if (userInfo[user]) {
      currentUser = user;
      return true;
    }
    return false;
  }

  function getRpcForUrl(url) {
    if (rpc[url]) {
      return rpc[url];
    }
    var rpcObj = new JsonRpc(null, ["UserStore.authenticateLongSession",
                                    "UserStore.authenticateToBusiness",
                                    "UserStore.revokeLongSession",
                                    "UserStore.completeTwoFactorAuthentication"]);
    rpcObj.initWithUrl(url);
    rpc[url] = rpcObj;
    return rpcObj;
  }

  function getRpcUrl() {
    return extension.getOption("secureProto") + bootstrapInfo.get("serviceHost") + "/json";
  }

  function getRpc(){
    return getRpcForUrl(getRpcUrl());
  }

  function getCurrentUser() {
    return currentUser;
  }

  function getLoggedInUserIds() {
    var ids = [];
    for (var i in userInfo) {
      ids.push(i);
    }
    ids.sort(function(a, b) {
      var _a = userInfo[a].username.toLowerCase();
      var _b = userInfo[b].username.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    return ids;
  }

  function getUserInfo(userId) { 
    if (!userId) userId = currentUser;
    var info = userInfo[userId];
    if (info) return info;
    return {};
  }

  function parseUserAgent(userAgent) {
    var browser, os;
    if (/macintosh/i.test(userAgent)) {
      os = "MacOS";
    } else if (/windows/i.test(userAgent)) {
      var m = userAgent.match(/Windows NT (.+);/);
      if (m) {
        switch (m[1]) {
          case "3.1":
            os = "Windows NT 3.1";
            break;
          case "3.5":
            os = "Windows NT 3.5";
            break;
          case "3.51":
            os = "Windows NT 3.51";
            break;
          case "4.0":
            os = "Windows NT 4.0";
            break;
          case "5.0":
            os = "Windows 2000";
            break;
          case "5.1":
            os = "Windows XP";
            break;
          case "5.2":
            os = "Windows XP";
            break;
          case "6.0":
            os = "Windows Vista";
            break;
          case "6.1":
            os = "Windows 7";
            break;
          case "6.2":
            os = "Windows 8";
            break;
          default:
            os = "Windows";
            break;
        }
      }
      else {
        os = "Windows";
      }
    } else if (/linux/i.test(userAgent)) {
      os = "Linux";
    } else {
      os = "Unknown Operating System";
    }
    if (SAFARI) {
      return "Safari (" + os + ")";
    } else if (OPERA) {
      return "Opera (" + os + ")";
    } else {
      return "Google Chrome (" + os + ")";
    }
  }

  function completeTwoFactorAuthentication(auth, code, callback) {
    if (callback) callbacks.push(callback);
    if (busy) return;
    busy = true;
    getRpc().client.UserStore.completeTwoFactorAuthentication(handleLogin, auth, code,
      Persistent.get("deviceID"), parseUserAgent(navigator.userAgent));
  }

  // Load our saved auth info.
  loadSavedAuth();

  // Public API:
  this.getAuthTokens = getAuthTokens;
  this.isAuthenticated = isAuthenticated;
  this.login = login;
  this.logout = logout;
  this.logoutUser = logoutUser;
  this.logoutAll = logoutAll;
  this.getCurrentUser = getCurrentUser;
  this.getUserInfo = getUserInfo;
  this.getLoggedInUserIds = getLoggedInUserIds;
  this.setCurrentUser = setCurrentUser;
  this.completeTwoFactorAuthentication = completeTwoFactorAuthentication;

  Object.preventExtensions(this);
}
Object.preventExtensions(Auth);
