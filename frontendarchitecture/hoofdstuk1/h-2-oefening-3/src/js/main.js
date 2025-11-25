// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

//Slechte startversie (die jij moet refactoren)
// let products = [];
//
// document.querySelector("#shop_btn_add").addEventListener("click", function () {
//     const input = document.querySelector("#shop_input");
//     const value = input.value;
//
//     if (value !== "") {
//         products.push(value);
//     }
//
//     let html = "";
//     for (let i = 0; i < products.length; i++) {
//         html += "<li class='list-group-item'>" + products[i] + "</li>";
//     }
//
//     document.querySelector("#shop_list").innerHTML = html;
//
//     input.value = "";
// });

//goede versie
const ShopListApp = (function () {

    let products = [];

    function handleAdd() {
        const input = document.querySelector("#shop_input");
        const value = input.value.trim();
        if (value === "") return;

        addProduct(value);
        render();
        input.value = "";
    }

    function addProduct(name) {
        products.push(name);
    }

    function render() {
        const list = document.querySelector("#shop_list");
        list.innerHTML = products
            .map(p => `<li class="list-group-item">${p}</li>`)
            .join("");
    }

    return {
        handleAdd
    };

})();

document
    .querySelector("#shop_btn_add")
    .addEventListener("click", ShopListApp.handleAdd);
