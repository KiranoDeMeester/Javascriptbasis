// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function maakProfielZin(naam, stad, hobby) {
    return `
        Hey, ik ben ${naam} uit ${stad}.
        Mijn hobby is ${hobby}.
        Leuk je te ontmoeten!`;
}

function toonProfiel() {
    const naam = document.getElementById("pf_name").value.trim();
    const stad = document.getElementById("pf_city").value.trim();
    const hobby = document.getElementById("pf_hobby").value.trim();
    const out = document.getElementById("pf_out");

    if (!naam || !stad || !hobby) {
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul alle velden in`;
        return;
    }

    const tekst = maakProfielZin(naam, stad, hobby);

    out.className = "alert alert-success mb-0";
    out.textContent = tekst;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pf_btn")
        ?.addEventListener("click", toonProfiel);
});
