// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function loadName() {
    const saved = localStorage.getItem("username");
    const out = document.getElementById("ls_output");

    if (saved) {
        out.className = "alert alert-success mb-0";
        out.textContent = `Welkom terug, ${saved}!`;
    }
}

function saveName() {
    const inp = document.getElementById("ls_name").value.trim();
    const out = document.getElementById("ls_output");

    if (!inp) return;

    localStorage.setItem("username", inp);

    out.className = "alert alert-success mb-0";
    out.textContent = ` Naam opgeslagen: ${inp}`;
}

document.addEventListener("DOMContentLoaded", () => {
    loadName();
    document.getElementById("ls_save")
        ?.addEventListener("click", saveName);
});