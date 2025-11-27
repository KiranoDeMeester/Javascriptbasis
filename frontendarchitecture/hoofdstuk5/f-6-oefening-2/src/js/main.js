// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
Je maakt een simpele productenlijst, maar nu met SoC.
* */

const Ex2ProductService = (function () {
    let products = [];

    function addProduct(name, price) {
        products.push({
            id: Date.now(),
            name,
            price,
        });
    }

    function getProducts() {
        return [...products];
    }

    function getTotalPrice() {
        return products.reduce((sum, p) => sum + p.price, 0);
    }

    return {
        addProduct,
        getProducts,
        getTotalPrice
    };
})();

// UI-laag
const Ex2ProductUI = (function () {
    function getFormValues() {
        const name = document.querySelector("#ex2_product_name").value.trim();
        const price = Number(document.querySelector("#ex2_product_price").value);
        return { name, price };
    }

    function clearForm() {
        document.querySelector("#ex2_product_name").value = "";
        document.querySelector("#ex2_product_price").value = "";
    }

    function showError(message) {
        alert(message);
    }

    function renderList(products) {
        const list = document.querySelector("#ex2_product_list");
        list.innerHTML = products
            .map(p => `
                <li class="list-group-item d-flex justify-content-between">
                  <span>${p.name}</span>
                  <span>€${p.price.toFixed(2)}</span>
                </li>
            `)
            .join("");
    }

    function renderTotal(total) {
        const div = document.querySelector("#ex2_total");
        div.textContent = `Totaal: €${total.toFixed(2)}`;
    }

    return {
        getFormValues,
        clearForm,
        showError,
        renderList,
        renderTotal
    };
})();

// App-laag
const Ex2ProductApp = (function () {
    function init() {
        document
            .querySelector("#ex2_btn_add")
            .addEventListener("click", handleAddProduct);
    }

    function handleAddProduct() {
        const { name, price } = Ex2ProductUI.getFormValues();

        if (!name || isNaN(price) || price <= 0) {
            Ex2ProductUI.showError("Gelieve een geldige naam en prijs in te geven.");
            return;
        }

        Ex2ProductService.addProduct(name, price);
        const products = Ex2ProductService.getProducts();
        const total = Ex2ProductService.getTotalPrice();

        Ex2ProductUI.renderList(products);
        Ex2ProductUI.renderTotal(total);
        Ex2ProductUI.clearForm();
    }

    return {
        init
    };
})();

Ex2ProductApp.init();