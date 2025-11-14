import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

// eigen js
function saveState() {
    const out = document.getElementById('theme_status');
    localStorage.theme = document.body.classList.contains('dark-mode') ? 'donkere' : 'licht';
    localStorage.setItem('out', JSON.stringify(out.textContent));
}

function loadState() {
    const saved = localStorage.getItem('theme');
    const outTxt = JSON.parse(localStorage.getItem('out'));
    const out = document.getElementById('theme_status');

    if (saved)
        document.body.classList.toggle('dark-mode', saved === 'donkere');

    if (outTxt && out)
        out.textContent = outTxt;
}

function toggleDarkMode() {
    const out = document.getElementById('theme_status');

    document.body.classList.toggle('dark-mode');

    out.textContent = document.body.className.includes("dark-mode")
        ? "donkere modus actief"
        : "licht modus actief";
    out.className = "alert alert-success mb-0";

    saveState();
}

document.addEventListener("DOMContentLoaded", () => {
    loadState();
    document.getElementById("theme_btn")
        ?.addEventListener("click", toggleDarkMode);
});
