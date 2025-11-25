document.getElementById("update").addEventListener("click", () => {
    chrome.runtime.sendMessage({type: "updateRules"}, res => {
        document.getElementById("status").textContent = "Filters updated!";
    });
});

document.getElementById("toggleSite").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    const domain = new URL(tab.url).hostname;
    const disabledSites = (await chrome.storage.local.get("disabledSites")).disabledSites || [];
    if(disabledSites.includes(domain)) disabledSites.splice(disabledSites.indexOf(domain),1);
    else disabledSites.push(domain);
    await chrome.storage.local.set({disabledSites});
    alert("Adblock toggled for " + domain);
});
