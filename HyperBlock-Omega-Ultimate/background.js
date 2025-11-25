importScripts("engine/updater.js","engine/sanitizer.js","engine/fingerprint.js","engine/mlCleaner.js");

chrome.runtime.onInstalled.addListener(()=>updateRules());
chrome.runtime.onStartup.addListener(()=>updateRules());

chrome.runtime.onMessage.addListener((msg,sender,sendResponse)=>{
    if(msg.type==="updateRules"){ updateRules(); sendResponse({status:"ok"}); }
});
