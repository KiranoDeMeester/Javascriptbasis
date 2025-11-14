// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// Lege array om namen op te slaan
// Lege array om namen op te slaan
/*
    We bewaren alle taken in een array.
    Elke keer de gebruiker een taak toevoegt komt die in deze array terecht.
    Daarna tonen we die taken op het scherm.
*/
// ----------------------------------
// Hoofdstuk 8: Root Nodes
// ----------------------------------

function plaatsBerichtInBody() {
    // selecteer de body
    const bodyNode = document.body;

    // maak een nieuw element
    const p = document.createElement("p");
    p.textContent = "Bericht toegevoegd via root node! ";
    p.className = "text-center mt-2 text-success fw-bold";

    // voeg toe aan body
    bodyNode.appendChild(p);
}

function veranderAchtergrond() {
    const htmlNode = document.documentElement; // <html>

    // lichte highlight
    htmlNode.style.background = "#e6f3ff";
}

function toonFeedback(tekst) {
    const out = document.getElementById("rn_output");
    out.className = "alert alert-success mb-0";
    out.textContent = tekst;
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("rn_btnMessage")
        ?.addEventListener("click", () => {
            plaatsBerichtInBody();
            toonFeedback("Bericht toegevoegd aan body ");
        });

    document.getElementById("rn_btnColor")
        ?.addEventListener("click", () => {
            veranderAchtergrond();
            toonFeedback("Achtergrond aangepast via <html> node 🎨");
        });
});
