// =========================
// features/stats/index.js
// =========================

import { CoreEventBus } from '../../core/eventBus.js';
import { CartStore } from '../cart/cartStore.js';
import { StatsComponent } from './statsComponent.js';

export const StatsFeature = (function () {

    function init() {
        // Luister naar cart changes
        CoreEventBus.subscribe('CART_CHANGED', payload => {
            const items = payload.items;
            const count = items.length;
            const total = payload.total;
            const avg = count === 0 ? 0 : total / count;
            StatsComponent.render(count, avg);
        });

        // Initiale render: gebruik huidige cart
        const items = CartStore.getItems();
        const total = CartStore.getTotal();
        const count = items.length;
        const avg = count === 0 ? 0 : total / count;
        StatsComponent.render(count, avg);
    }

    return {
        init
    };
})();
