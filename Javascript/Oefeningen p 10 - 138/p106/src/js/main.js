// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// ---------------------------------------------------
// Hoofdstuk 25: JSON File Load (Local API Simulator)
// ---------------------------------------------------

async function loadLocalUsers() {
    const status = document.getElementById("json_status");
    const list = document.getElementById("json_list");

    try {
        status.className = "alert alert-warning mb-0";
        status.textContent = "⏳ JSON laden...";

        const res = await fetch("./data/users.json");
        if (!res.ok) throw new Error("Fout bij laden JSON");

        const users = await res.json();

        list.innerHTML = users
            .map(u => `<li class="list-group-item"><strong>${u.name}</strong><br>${u.email}</li>`)
            .join("");

        status.className = "alert alert-success mb-0";
        status.textContent = ` ${users.length} gebruikers geladen`;

    } catch(err) {
        status.className = "alert alert-danger mb-0";
        status.textContent = "❌ Kon JSON niet laden";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("json_btn")
        ?.addEventListener("click", loadLocalUsers);
});
