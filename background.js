chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  func: () => {
		// This runs inside the page
		const bodyText = document.body.innerText;
		console.log("Page content:", bodyText);
		alert("First 100 characters:\n" + bodyText.slice(0, 100));
	  }
	});
  });
  