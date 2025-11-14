// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

function bepaalKleurInfo(kleur) {
    const input = kleur.toLowerCase()

    if (input === "rood") return { text: "Je koos rood", color: "red" };
    if (input === "blauw") return { text: "Je koos blauw", color: "blue" };

    return { text: "Onbekende kleur", color: null };
}

// Impure function (DOM)
function toonKleur() {
    const inp = document.getElementById("nf_input");
    const out = document.getElementById("nf_text");
    const box = document.getElementById("nf_box");

    const waarde = inp.value.trim();

    if (!waarde) {
        out.className = "alert alert-warning mb-2";
        out.textContent = "⚠️ Geef een kleur in";
        box.style.background = "#f8f9fa";
        box.textContent = "Geen kleur";
        return;
    }

    const resultaat = bepaalKleurInfo(waarde);

    if (!resultaat.color) {
        out.className = "alert alert-danger mb-2";
        out.textContent = resultaat.text;
        box.style.background = "#f8f9fa";
        box.textContent = "Onbekend fruit";
        return;
    }

    out.className = "alert alert-success mb-2";
    out.textContent = resultaat.text;
    box.style.background = resultaat.color;
    box.textContent = resultaat.color.toUpperCase();
}

// Event koppeling
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nf_btn")
        ?.addEventListener("click", toonKleur);
});