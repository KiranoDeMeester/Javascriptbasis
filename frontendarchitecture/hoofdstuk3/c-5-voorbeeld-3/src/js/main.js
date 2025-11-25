// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
* Alle parts van de UI delen dus één CartStore instantie.
*/
class CartStoreSingleton {
    static instance;

    constructor() {
        if (CartStoreSingleton.instance) {
            return CartStoreSingleton.instance;
        }
        this.items = [];
        CartStoreSingleton.instance = this;
    }

    addItem(name) {
        this.items.push({
            id: Date.now() + Math.random(),
            name
        });
        this.render();
    }

    getItems() {
        return [...this.items];
    }

    getCount() {
        return this.items.length;
    }

    render() {
        // cart lijst
        const list = document.querySelector("#cart_list");
        if (list) {
            list.innerHTML = this.items
                .map(item => `<li class="list-group-item">${item.name}</li>`)
                .join("");
        }

        // badge
        const badge = document.querySelector("#cart_badge");
        if (badge) {
            badge.textContent = this.getCount();
        }
    }
}

// één centrale store
const CartStore = new CartStoreSingleton();

// “productlijstmodule”
const ProductListModule = (function () {
    function init() {
        const buttons = document.querySelectorAll(".btn_add_to_cart");
        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const name = btn.getAttribute("data-product");
                CartStore.addItem(name);
            });
        });
    }

    return {
        init
    };
})();

// initialiseren
ProductListModule.init();
CartStore.render();
