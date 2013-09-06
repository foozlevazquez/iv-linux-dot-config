// shows the pdf tooltip the first time the user lands on a pdf
if (window == window.parent) {
  var flags = [ "gmailTooltip" ];
  var tooltip;
  var bootstrapInfo;

  function removeTooltip() {
    if (tooltip) {
      tooltip.parentElement.removeChild(tooltip);
      tooltip = null;
    }
  }

  function init(evt) {
    if (evt && evt.animationName == "nodeInserted") {
      Browser.sendToExtension({
        name: "main_isAuthenticated",
        type: "tooltip",
        bootstrapInfo: { name: null }
      });
    }
  }

  function isGmailThread() {
    if (/^https:\/\/mail\.google\.com\/mail\//.test(document.location.href)) {
      var threadButtons = document.querySelectorAll("span > div > span > [src='images/cleardot.gif']");
      if (threadButtons.length > 0) {
        return true;
      }
    }
    return false;
  }

  function msgHandlerIsAuthenticated(request, sender, sendResponse) {
    if (request.auth) {
      for (var i = 0; i < flags.length; i++) {
        Browser.sendToExtension({
          name: "getPersistentFlag",
          key: flags[i] + request.auth.userId,
          set: true,
          setValue: true
        });
      }
      if (request.bootstrapInfo) {
        bootstrapInfo = request.bootstrapInfo;
      }
    }
  }

  function msgHandlerReceivePersistentFlag(request, sender, sendResponse) {
    if (/^gmailTooltip/.test(request.key) && request.value != true && isGmailThread()) {
      showTooltip("gmailTooltip");
    }
  }

  function showTooltip(type) {
    tooltip = document.createElement("div");
    tooltip.id = "evernoteTooltip";
    tooltip.style.backgroundColor = "#F2F5F6";
    tooltip.style.border = "5px solid white";
    tooltip.style.borderRadius = "8px";
    tooltip.style.lineHeight = "16px";
    tooltip.style.minHeight = "115px";
    tooltip.style.right = "30px";
    tooltip.style.padding = "10px";
    tooltip.style.position = "fixed";
    tooltip.style.top = "30px";
    tooltip.style.width = "280px";
    tooltip.style.zIndex = "2147483647";

    var top = document.createElement("div");
    var logo = document.createElement("span");
    logo.style.float = "left";
    if (/china/i.test(bootstrapInfo.name)) {
      logo.style.backgroundImage = "url(" + Browser.extension.getURL("images/web-clipper-logo-china.png") + ")";
      if (window.devicePixelRatio >= 1.5) {
        logo.style.backgroundImage = "url(" + Browser.extension.getURL("images/web-clipper-logo-china@2x.png") + ")";
      }
      logo.style.backgroundSize = "91px 45px";
      logo.style.height = "45px";
      logo.style.width = "91px";
    } else {
      logo.style.backgroundImage = "url(" + Browser.extension.getURL("images/web-clipper-logo.png") + ")";
      if (window.devicePixelRatio >= 1.5) {
        logo.style.backgroundImage = "url(" + Browser.extension.getURL("images/web-clipper-logo@2x.png") + ")";
      }
      logo.style.backgroundSize = "191px 36px";
      logo.style.height = "36px";
      logo.style.width = "191px";
    }
    var close = document.createElement("span");
    close.style.backgroundImage = "url(" + Browser.extension.getURL("images/pdf_close_btn.png") + ")";
    if (window.devicePixelRatio >= 1.5) {
      close.style.backgroundImage = "url(" + Browser.extension.getURL("images/pdf_close_btn@2x.png") + ")";
    }
    close.style.backgroundSize = "18px 18px";
    close.style.cursor = "pointer";
    close.style.height = "18px";
    close.style.width = "18px";
    close.style.float = "right";
    close.addEventListener("click", removeTooltip);
    var bottom = document.createElement("div");
    bottom.style.clear = "both";
    bottom.style.fontFamily = "Helvetica, Arial, sans-serif";
    bottom.style.fontSize = "12px";
    bottom.style.fontStyle = "normal";
    bottom.style.fontWeight = "normal";
    bottom.style.paddingTop = "10px";
    bottom.innerHTML = Browser.i18n.getMessage(type);

    top.appendChild(logo);
    top.appendChild(close);
    tooltip.appendChild(top);
    tooltip.appendChild(bottom);
    document.documentElement.appendChild(tooltip);
  }

  Browser.addMessageHandlers({
    receivePersistentFlag: msgHandlerReceivePersistentFlag,
    tooltip_isAuthenticated: msgHandlerIsAuthenticated
  });

  document.addEventListener("webkitAnimationStart", init);
}