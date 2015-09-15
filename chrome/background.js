function execute(tab) {
  chrome.tabs.executeScript(tab.id, {
    "file": "core.js"
  }, function () { });
}

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.storage.sync.get("goflix", function(data) {
    if (data["goflix"] != "true") {
      chrome.storage.sync.set({"goflix": "true"}, function() {
        execute(tab);
      });
    } else {
      chrome.storage.sync.set({"goflix": "false"}, function() {
        execute(tab);
      });
    }
  });
});
