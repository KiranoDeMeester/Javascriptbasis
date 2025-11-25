// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
* Slechte code:
•	Mogelijke problemen:
1.	Data-opslag (products) en UI (lijst opbouwen) zitten in dezelfde functie.
2.	Validatie, businesslogica, state update, UI update en logging allemaal in één event handler.
3.	Geen aparte service (bv. ProductService) voor data.
4.	Geen aparte UI-module voor renderen.
5.	Geen hergebruik: wil je elders producten tonen, moet je code dupliceren.
6.	Dom-elementen worden telkens opnieuw gezocht in de handler.
7.	Moeilijk testbaar: je kan bv. validatie niet apart testen.

* */

// Data/service-laag
let products = [];

document
    .querySelector("#ex1_btn_add_product")
    .addEventListener("click", function () {
        const nameInput = document.querySelector("#ex1_product_name");
        const priceInput = document.querySelector("#ex1_product_price");
        const list = document.querySelector("#ex1_product_list");

        const name = nameInput.value;
        const price = Number(priceInput.value);

        if (!name || price <= 0 || isNaN(price)) {
            alert("Foute input");
        } else {
            products.push({
                id: Date.now(),
                name,
                price
            });
        }

        // UI render
        list.innerHTML = "";
        products.forEach(p => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between";
            li.innerHTML = `<span>${p.name}</span><span>€${p.price.toFixed(2)}</span>`;
            list.appendChild(li);
        });

        // logging
        console.log("Products:", products);

        // clear
        nameInput.value = "";
        priceInput.value = "";
    });
