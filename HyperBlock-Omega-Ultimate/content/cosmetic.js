import { heuristicClean } from "../engine/mlCleaner.js";

(async () => {
    const selectors = await fetch(chrome.runtime.getURL("../rules/cosmetic.json")).then(r => r.json());

    const clean = () => {
        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => el.remove());
        });
        heuristicClean();
    };

    new MutationObserver(clean).observe(document.documentElement, { childList: true, subtree: true });
    clean();
})();
