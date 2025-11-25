// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
* Hier zie je:
•	Productenmodule publish-t "CART_ADD"
•	CartStore subscribe-t "CART_ADD" en publish-t "CART_CHANGED"
•	Badge- en lijstmodules subscribe-n "CART_CHANGED"
Geen van de UI-modules kent elkaars implementatie → dit is exact wat je wilt in grotere apps.
*/
// NotificationCenter (EventBus)
// EventBus (herbruikbaar)
const ObEventBus = {
    listeners: {},

    subscribe(eventName, handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(handler);
    },

    publish(eventName, payload) {
        const handlers = this.listeners[eventName] || [];
        handlers.forEach(fn => fn(payload));
    }
};

// Data: even hardcoded
const ObProductsData = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Monitor", price: 249 },
    { id: 3, name: "Toetsenbord", price: 59 }
];

// Productenmodule (publisher)
const ObProductsModule = (function () {
    function init() {
        const container = document.querySelector("#ob_products_container");
        container.innerHTML = ObProductsData.map(p => `
          <div class="col-md-4">
            <div class="border rounded p-3 h-100 d-flex flex-column">
              <h5>${p.name}</h5>
              <p class="mb-2">€${p.price}</p>
              <button
                class="btn btn-sm btn-success mt-auto ob_btn_add"
                data-id="${p.id}"
              >
                Voeg toe aan cart
              </button>
            </div>
          </div>
        `).join("");

        container.querySelectorAll(".ob_btn_add").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = Number(btn.getAttribute("data-id"));
                const product = ObProductsData.find(p => p.id === id);
                if (!product) return;

                // publish event
                ObEventBus.publish("CART_ADD", { product });
            });
        });
    }

    return {
        init
    };
})();

// CartStore + modules (observers)
const ObCartStore = (function () {
    let items = [];

    function add(product) {
        items.push(product);
        notifyChange();
    }

    function getItems() {
        return [...items];
    }

    function notifyChange() {
        ObEventBus.publish("CART_CHANGED", { items: getItems() });
    }

    // subscribe op CART_ADD
    ObEventBus.subscribe("CART_ADD", payload => {
        add(payload.product);
    });

    return {
        getItems
    };
})();

// Badge-module (observer)
const ObCartBadgeModule = (function () {
    function init() {
        ObEventBus.subscribe("CART_CHANGED", payload => {
            const badge = document.querySelector("#ob_cart_badge");
            badge.textContent = payload.items.length;
        });
    }

    return {
        init
    };
})();

// Cart-lijst-module (observer)
const ObCartListModule = (function () {
    function init() {
        ObEventBus.subscribe("CART_CHANGED", payload => {
            const list = document.querySelector("#ob_cart_list");
            list.innerHTML = payload.items
                .map(item => `<li class="list-group-item">${item.name}</li>`)
                .join("");
        });
    }

    return {
        init
    };
})();

// Initialiseren
ObProductsModule.init();
ObCartBadgeModule.init();
ObCartListModule.init();
