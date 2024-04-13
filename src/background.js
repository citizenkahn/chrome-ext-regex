// background.js

// Listen for a message from the popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'performReplace') {
    // Send a message to the content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'performReplace', regex: request.regex});
    });
  }
});