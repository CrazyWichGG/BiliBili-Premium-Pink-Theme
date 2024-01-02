fetch('base64.json')
  .then(res => res.json())
  .then(base64 => {
    return base64;
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  return tabs[0].id;
});

if (true) {
  chrome.scripting.CSSInjection({
    files: ["inject.css"],
    target: { tabId: tabs[0].id }
  });
}
