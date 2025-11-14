// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function berekenLeeftijd(jaar) {
    const huidigJaar = new Date().getFullYear();
    return huidigJaar - jaar;
}

function toonLeeftijd(e) {
    e.preventDefault();

    const input = document.getElementById("age_input").value.trim();
    const out = document.getElementById("age_output");

    if (!input || isNaN(input)) {
        out.className = "alert alert-danger mb-0";
        out.textContent = "❌ Geef een geldig jaar in";
        return;
    }

    const leeftijd = berekenLeeftijd(Number(input));

    const gebruiker = {
        geboorteJaar: Number(input),
        leeftijd: leeftijd
    };

    out.className = "alert alert-success mb-0";
    out.textContent = ` Je bent ongeveer ${gebruiker.leeftijd} jaar oud (geboren in ${gebruiker.geboorteJaar})`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("age_form")?.addEventListener("submit", toonLeeftijd);
});