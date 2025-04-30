console.log("Hello!");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});

chrome.runtime.onStartup.addListener(() => {
  console.log("Chrome has started");
});

chrome.action.onClicked.addListener((tab) => {
	// chrome.scripting.executeScript({
	//   target: { tabId: tab.id },
	//   func: () => {
	// 	alert("Extension icon clicked!");
	//   }
	// });
		alert("Extension icon clicked!");
  });