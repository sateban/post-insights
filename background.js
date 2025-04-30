// chrome.action.onClicked.addListener((tab) => {
// 	chrome.scripting.executeScript({
// 	  target: { tabId: tab.id },
// 	  func: () => {
// 		// This runs inside the page
// 		const bodyText = document.body.innerText;
// 		console.log("Page content:", bodyText);
// 		alert("First 100 characters:\n" + bodyText.slice(0, 100));
// 	  }
// 	});
//   });

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });

const extensions = "https://google.com";
const webstore = "https://google.com/";

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === "ON" ? "OFF" : "ON";

	console.log(nextState);
    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === "ON") {
      // Insert the CSS file when the user turns the extension on
      await chrome.scripting.insertCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    } else if (nextState === "OFF") {
      // Remove the CSS file when the user turns the extension off
      await chrome.scripting.removeCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    }
  }
});
