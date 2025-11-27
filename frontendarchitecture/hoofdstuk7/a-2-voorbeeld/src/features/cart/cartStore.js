// =========================
// features/cart/cartStore.js
// =========================

import { CoreEventBus } from '../../core/eventBus.js';

const CartStore = (function () {
    let items = [];

    function add(product) {
        items.push(product);
        notify();
    }

    function remove(id) {
        items = items.filter(item => item.id !== id);
        notify();
    }

    function notify() {
        CoreEventBus.publish('CART_CHANGED', {
            items: getItems(),
            total: getTotal()
        });
    }

    function getItems() {
        return [...items];
    }

    function getTotal() {
        return items.reduce((sum, i) => sum + i.price, 0);
    }

    // observers
    CoreEventBus.subscribe('CART_ADD', payload => add(payload.product));
    CoreEventBus.subscribe('CART_REMOVE', payload => remove(payload.id));

    return {
        getItems,
        getTotal
    };
})();

export { CartStore };
