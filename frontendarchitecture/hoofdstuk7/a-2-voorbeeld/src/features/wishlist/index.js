// =========================
// features/wishlist/index.js
// =========================

import { WishlistStore } from './wishlistStore.js';
import { WishlistComponent } from './wishlistComponent.js';
import { CoreEventBus } from '../../core/eventBus.js';

export const WishlistFeature = (function () {

    function init() {
        // initial render
        WishlistComponent.render(WishlistStore.getItems());

        // luister naar wijzigingen
        CoreEventBus.subscribe('WISHLIST_CHANGED', payload => {
            WishlistComponent.render(payload.items);
        });
    }

    return {
        init
    };
})();
