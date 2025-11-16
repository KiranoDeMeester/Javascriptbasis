// --- Imports ---
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

// --- DOM-elementen ---
const loadBtn = document.getElementById("m14_load");
const searchInput = document.getElementById("m14_search");
const statusBox = document.getElementById("m14_status");
const cardsContainer = document.getElementById("m14_cards");

// --- State ---
let characters = [];

// --- Functie: render cards ---
function renderCards(list) {
    cardsContainer.innerHTML = "";

    if (list.length === 0) {
        statusBox.textContent = "Geen personages gevonden.";
        statusBox.className = "alert alert-warning mb-3";
        return;
    }

    statusBox.textContent = `Gevonden personages: ${list.length}`;
    statusBox.className = "alert alert-success mb-3";

    list.forEach(c => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${c.image}" class="card-img-top" alt="${c.name}">
                <div class="card-body">
                    <h5 class="card-title">${c.name}</h5>
                    <p class="card-text">
                        Status: ${c.status} <br>
                        Geslacht: ${c.gender} <br>
                        Soort: ${c.species}
                    </p>
                </div>
            </div>
        `;
        cardsContainer.appendChild(col);
    });
}

// --- Functie: filter characters ---
function filterCharacters() {
    const query = searchInput.value.toLowerCase();
    const filtered = characters.filter(c => c.name.toLowerCase().includes(query));
    renderCards(filtered);
}

// --- Functie: load characters via API ---
async function loadCharacters() {
    statusBox.textContent = "Laden...";
    statusBox.className = "alert alert-info mb-3";

    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        characters = data.results;

        renderCards(characters);
        searchInput.disabled = false;
        searchInput.addEventListener("input", filterCharacters);

        statusBox.textContent = `Personages geladen: ${characters.length}`;
        statusBox.className = "alert alert-success mb-3";
    } catch (err) {
        statusBox.textContent = "Er is iets misgegaan bij het laden.";
        statusBox.className = "alert alert-danger mb-3";
        console.error(err);
    }
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
    loadBtn.addEventListener("click", loadCharacters);
});
