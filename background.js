
// chrome.runtime.onInstalled.addListener(() => {
 
//   chrome.storage.sync.get(["geminiApiKey"], (result) => {
//     if (!result.geminiApiKey) {
//       chrome.tabs.create({
//         url: "options.html",
//       });
//     }
//   });
// });












chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
    console.log("Content script injected successfully");
  } catch (e) {
    console.error("Failed to inject content script:", e);
  }
});
