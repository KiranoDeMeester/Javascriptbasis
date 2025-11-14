// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
let favs = [];

function saveFavs() {
    localStorage.setItem("favs", JSON.stringify(favs));
}

function loadFavs() {
    const saved = JSON.parse(localStorage.getItem("favs"));
    if (saved) favs = saved;
    renderFavs();
}

function renderFavs() {
    document.getElementById("fav_list").innerHTML =
        favs.map(f => `<li class="list-group-item">${f}</li>`).join("");
}

function addFav() {
    const val = document.getElementById("fav_input").value.trim();
    if (!val) return;

    favs.push(val);
    saveFavs();
    renderFavs();
    document.getElementById("fav_input").value = "";
}

function clearFavs() {
    favs = [];
    localStorage.removeItem("favs");
    renderFavs();
}

document.addEventListener("DOMContentLoaded", () => {
    loadFavs();
    document.getElementById("fav_btn")?.addEventListener("click", addFav);
    document.getElementById("fav_clear")?.addEventListener("click", clearFavs);
});
