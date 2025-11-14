// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const producten = [];

function Product(product, prijs) {
    this.productNaam = product;
    this.prijs = prijs;
    this.label = function() {
        return `${this.productNaam} - €${this.prijs.toFixed(2)}`;
    }
}

function addProduct(){
    const productNaam = document.getElementById("prod_name").value;
    const prijs = document.getElementById("prod_price").value;
    const list = document.getElementById("prod_list");

    if(!productNaam || !prijs) return;

    const product = new Product(productNaam, Number(prijs));
    producten.push(product);

    list.innerHTML = producten
    .map(product => `<li class ="list-group-item">${product.label()}</li>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prod_btn")
        ?.addEventListener("click", addProduct);
});