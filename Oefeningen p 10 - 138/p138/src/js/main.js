import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

import { productCard } from "./components/productCard.js";
import { fetchProducts } from "./services/apiServices.js";

document.addEventListener("DOMContentLoaded", async () => {
    const out = document.getElementById("mod_out");
    out.textContent = "⏳ Laden...";

    try {
        const products = await fetchProducts();
        out.innerHTML = products.map(productCard).join("");
    } catch (err) {
        console.error(err);
        out.innerHTML = `
            <div class="alert alert-danger">❌ Kon producten niet laden</div>
        `;
    }
});
