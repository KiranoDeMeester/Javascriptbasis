// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// Lege array om namen op te slaan
const namen = [];

// Pure functie -> maakt lijst HTML
function maakLijstHTML(items) {
    return items.map(item => `<li class="list-group-item">${item}</li>`).join("");
}

// UI handler
function voegNaamToe() {
    const inp = document.getElementById("arr_name");
    const lijst = document.getElementById("arr_list");
    const count = document.getElementById("arr_count");

    const naam = inp.value.trim();

    if (!naam) {
        alert("⚠️ Geef een naam in!");
        return;
    }

    // voeg toe aan array
    namen.push(naam);

    // UI updaten
    lijst.innerHTML = maakLijstHTML(namen);
    count.textContent = namen.length;

    // veld leegmaken
    inp.value = "";
}

// Event listener
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("arr_btn")
        ?.addEventListener("click", voegNaamToe);
});