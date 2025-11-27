// =========================
// features/wishlist/wishlistStore.js
// =========================

import { CoreEventBus } from '../../core/eventBus.js';

const WishlistStore = (function () {
    let items = [];

    function add(product) {
        // optioneel: dubbele items vermijden
        if (!items.find(i => i.id === product.id)) {
            items.push(product);
            notifyChange();
        }
    }

    function getItems() {
        return [...items];
    }

    function notifyChange() {
        CoreEventBus.publish('WISHLIST_CHANGED', {
            items: getItems()
        });
    }

    // luister naar WISHLIST_ADD
    CoreEventBus.subscribe('WISHLIST_ADD', payload => {
        add(payload.product);
    });

    return {
        getItems
    };
})();

export { WishlistStore };
