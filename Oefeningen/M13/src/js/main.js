// --- Imports voor Vite ---
import '../scss/styles.scss';   // jouw globale SCSS
import * as bootstrap from 'bootstrap'; // bootstrap JS (optioneel voor modals, tooltips etc.)

// --- Product class ---
class Product {
    constructor(name, category, price, description) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
    }
}

// --- Productlijst ---
const m13_productsList = [
    new Product("JavaScript Basis", "books", 29.99, "Boek voor absolute beginners in JS"),
    new Product("HTML & CSS", "courses", 49.99, "Cursus voor webdesign"),
    new Product("TaskManagerApp", "software", 19.99, "Organiseer je taken efficiënt"),
    new Product("React voor Beginners", "books", 39.99, "Leer React stap voor stap"),
    new Product("Vue Masterclass", "courses", 59.99, "Volledige cursus Vue.js"),
    new Product("PhotoEditor Pro", "software", 99.99, "Geavanceerde fotobewerkingssoftware")
];

// --- DOM-elementen ---
const categorySelect = document.getElementById("m13_cat");
const maxPriceInput = document.getElementById("m13_max");
const filterBtn = document.getElementById("m13_filter");
const statusBox = document.getElementById("m13_status");
const productsContainer = document.getElementById("m13_products");

// --- Functie: render products ---
function renderProducts(products) {
    if (!productsContainer) return;

    productsContainer.innerHTML = "";

    if (products.length === 0) {
        statusBox.textContent = "Geen producten gevonden met deze filter.";
        statusBox.className = "alert alert-warning mb-3";
        return;
    }

    statusBox.textContent = `Gevonden producten: ${products.length}`;
    statusBox.className = "alert alert-success mb-3";

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "col-md-6 col-lg-4";

        card.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${p.name}</h5>
                    <span class="badge ${
            p.category === "books" ? "bg-secondary" :
                p.category === "courses" ? "bg-info" :
                    "bg-warning text-dark"
        } mb-2">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span>
                    <p class="card-text">${p.description}</p>
                </div>
                <div class="card-footer fw-bold">€${p.price.toFixed(2)}</div>
            </div>
        `;
        productsContainer.appendChild(card);
    });
}

// --- Functie: apply filters ---
function applyFilters() {
    let filtered = [...m13_productsList];

    const selectedCategory = categorySelect?.value || "all";
    const maxPrice = parseFloat(maxPriceInput?.value);

    if (selectedCategory !== "all") {
        filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (!isNaN(maxPrice) && maxPrice > 0) {
        filtered = filtered.filter(p => p.price <= maxPrice);
    }

    renderProducts(filtered);
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(m13_productsList);

    if (filterBtn) {
        filterBtn.addEventListener("click", applyFilters);
    }
});
