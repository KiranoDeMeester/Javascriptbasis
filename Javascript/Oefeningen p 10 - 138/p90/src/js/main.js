// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// ---------------------------------------------
// Hoofdstuk 20: ES6 Classes + extends + super
// ---------------------------------------------

// --------------------------------------
// Hoofdstuk 21: Mini Webshop Project
// --------------------------------------

class Product {
    constructor(name, price, emoji) {
        this.name = name;
        this.price = price;
        this.emoji = emoji;
    }

    label() {
        return `${this.emoji} ${this.name} — €${this.price.toFixed(2)}`;
    }
}

const products3 = [
    new Product("Pizza", 12.5, "🍕"),
    new Product("Hamburger", 9.9, "🍔"),
    new Product("Sushi", 15.0, "🍣"),
    new Product("Frietjes", 4.5, "🍟")
];

let cartCount = 0;

function renderProducts() {
    const cont = document.getElementById("prod_container");

    cont.innerHTML = products3
        .map((p, i) => `
      <div class="card mb-2">
        <div class="card-body d-flex justify-content-between align-items-center">
          <strong>${p.label()}</strong>
          <button class="btn btn-sm btn-success prod_buy" data-idx="${i}">
            Koop
          </button>
        </div>
      </div>
    `)
        .join("");
}

function addToCart(idx) {
    cartCount++;
    const badge = document.getElementById("cart_count");
    const msg = document.getElementById("cart_msg");

    badge.textContent = cartCount;
    badge.classList.add("cart-added");
    setTimeout(() => badge.classList.remove("cart-added"), 300);

    msg.className = "alert alert-success mt-2 mb-0";
    msg.textContent = ` ${products3[idx].name} toegevoegd aan winkelmandje`;
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();

    document.getElementById("prod_container")
        ?.addEventListener("click", (e) => {
            if (e.target.classList.contains("prod_buy")) {
                addToCart(e.target.dataset.idx);
            }
        });
});
