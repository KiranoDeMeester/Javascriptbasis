// Heuristische schoonmaak functie
function heuristicClean() {
    const patterns = [/adbanner/i, /sponsor/i, /promoted/i, /pixel/i];
    document.querySelectorAll("*").forEach(el => {
        const combined = (el.className + " " + el.id + " " + el.dataset.ad).toLowerCase();
        if (patterns.some(p => p.test(combined))) el.remove();
    });
}

(async () => {
    const url = chrome.runtime.getURL("rules/cosmetic.json");
    const selectors = await fetch(url).then(r => r.json());

    function clean() {
        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => el.remove());
        });
        heuristicClean();
    }

    new MutationObserver(clean).observe(document.documentElement, { childList: true, subtree: true });
    clean();
})();
