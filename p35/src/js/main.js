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
const taken = [];

// Pure functie -> maakt lijst HTML
 function maakLijstHTML(items) {
//     <p className="badge bg-primary py-2 px-3">taak 1</p>
    return items.map(item => `<p class="badge bg-primary py-2 px-3 me-1">${item}</p>`).join("");
}

// UI handler
function voegTaakToe() {
    const inp = document.getElementById("arr_taak");
    const lijst = document.getElementById("arr_list");
    const count = document.querySelector(".arr_count");

    const taak = inp.value.trim();

    if (!taak) {
        alert("⚠️ Geef een taak in!");
        return;
    }

    // voeg toe aan array
    taken.push(taak);

    // UI updaten
    lijst.innerHTML = maakLijstHTML(taken);
    count.textContent = taken.length;

    // veld leegmaken
    inp.value = "";
}

// Event listener
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("arr_btn")
        ?.addEventListener("click", voegTaakToe);
});