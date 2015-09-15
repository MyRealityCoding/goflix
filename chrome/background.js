function execute(tab) {
  chrome.tabs.executeScript(tab.id, {
    "file": "core.js"
  }, function () { });
}

chrome.browserAction.onClicked.addListener(function (tab) {
  if (tab.url.indexOf("https://www.netflix.com/") != -1) {
    chrome.storage.sync.get("goflix", function(data) {
      if (data["goflix"] != "true") {
        chrome.browserAction.setIcon({
           path: "icon-active.png",
           tabId: tab.id
        });
        chrome.storage.sync.set({"goflix": "true"}, function() {
          execute(tab);
        });
      } else {
        chrome.browserAction.setIcon({
           path: "icon.png",
           tabId: tab.id
        });
        chrome.storage.sync.set({"goflix": "false"}, function() {
          execute(tab);
        });
      }
    });
  }
});
