var TIMEOUT = 500;
var BUTTON = "continue-playing";

function toggle() {
  chrome.storage.sync.get("goflix", function(data) {
    if (data["goflix"] == "true") {
      var buttons = document.getElementsByClassName(BUTTON);
      if (buttons.length > 0) {
        buttons[0].click();
      }
      setTimeout(toggle, TIMEOUT);
    }
  });
};

toggle();
