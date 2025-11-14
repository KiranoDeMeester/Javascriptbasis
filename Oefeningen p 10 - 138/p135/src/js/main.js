import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

// Imports van onze modules
import { fetchUser } from "./services/apiServices.js";
import { userCard } from "./components/userCard.js";
import { capitalize } from "./utils/format.js";
// DOM
document.addEventListener("DOMContentLoaded", async () => {
    const out = document.getElementById("mod_out");
    out.textContent = "⏳ Laden...";
    try {
        const user = await fetchUser(3);
        out.innerHTML = userCard(user);
        console.log(capitalize("module systeem actief!"));
    } catch (err) {
        out.innerHTML = `<div class="alert alert-danger">❌ Kon user niet
laden</div>`;
    }
});
