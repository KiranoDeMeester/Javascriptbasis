import { updateRules } from "./engine/updater.js";
import { sanitizeRequest } from "./engine/sanitizer.js";
import { heuristicClean } from "./engine/mlCleaner.js";

// Bij installatie of startup: update regels
chrome.runtime.onInstalled.addListener(() => updateRules());
chrome.runtime.onStartup.addListener(() => updateRules());

// Luister naar berichten van popup of content scripts
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if(msg.type === "updateRules") {
        updateRules();
        sendResponse({status: "ok"});
    }
});
