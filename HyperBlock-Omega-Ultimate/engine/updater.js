export async function updateRules() {
    const REMOTE_LISTS = [
        "https://example.com/easylist.txt",
        "https://example.com/easyprivacy.txt"
    ];

    let rules = [];
    for(const url of REMOTE_LISTS) {
        try {
            const txt = await fetch(url).then(r => r.text());
            const lines = txt.split("\n").map(l => l.trim()).filter(l => l && !l.startsWith("!"));
            rules.push(...lines);
        } catch(e) {
            console.warn("Failed to fetch:", url, e);
        }
    }

    rules = [...new Set(rules)].slice(0, 150000);

    const dnrRules = rules.map((pattern, i) => ({
        id: i + 1000,
        priority: 1,
        action: { type: "block" },
        condition: { urlFilter: pattern, resourceTypes: ["script", "image", "xmlhttprequest", "sub_frame"] }
    }));

    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: Array.from({ length: 150000 }, (_, i) => i + 1000),
        addRules: dnrRules
    });
}
