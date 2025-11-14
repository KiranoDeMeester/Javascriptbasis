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

function darkMode(){
    const dmStatus = document.getElementById("dm_status");
    dmStatus.textContent = "Dark mode actief 🌙";
    dmStatus.className = "alert alert-success";

    const htmlNode = document.documentElement; // <html>
    htmlNode.style.background = "#222";
    htmlNode.text.color = "#fff";
}

function lightMode(){
    const lmStatus = document.getElementById("dm_status");
    lmStatus.textContent = "Light mode actief ☀️";
    lmStatus.className = "alert alert-success";

    const htmlNode = document.documentElement; // <html>
    htmlNode.style.background = "#fff";
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dm_on")
        ?.addEventListener("click", () => {
            darkMode();
        });

    document.getElementById("dm_off")
        ?.addEventListener("click", () => {
            lightMode();
        });
});
