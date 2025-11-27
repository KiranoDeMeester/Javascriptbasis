// =========================
// features/activity/index.js
// =========================

import { CoreEventBus } from '../../core/eventBus.js';
import { ActivityLogStore } from './activityStore.js';
import { ActivityComponent } from './activityComponent.js';

export const ActivityFeature = (function () {

    function init() {
        // luister naar events van meerdere features
        CoreEventBus.subscribe('CART_ADD', payload => {
            ActivityLogStore.addActivity(
                `Item toegevoegd: ${payload.product.name}`
            );
        });

        CoreEventBus.subscribe('CART_REMOVE', () => {
            ActivityLogStore.addActivity('Item verwijderd uit cart');
        });

        CoreEventBus.subscribe('WISHLIST_ADD', payload => {
            ActivityLogStore.addActivity(
                `Wishlist: ${payload.product.name}`
            );
        });

        // render bij updates
        CoreEventBus.subscribe('ACTIVITY_UPDATED', payload => {
            ActivityComponent.render(payload.entries);
        });

        // initial render
        ActivityComponent.render(ActivityLogStore.getEntries());
    }

    return {
        init
    };
})();
