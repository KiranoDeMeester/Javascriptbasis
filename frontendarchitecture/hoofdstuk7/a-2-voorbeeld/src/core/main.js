// =========================
// core/main.js
// =========================

import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

import { ProductsFeature } from '../features/products/index.js';
import { CartFeature } from '../features/cart/index.js';
import { WishlistFeature } from '../features/wishlist/index.js';
import { UserProfileFeature } from '../features/userProfile/index.js';
import { StatsFeature } from '../features/stats/index.js';
import { ActivityFeature } from '../features/activity/index.js';

// =========================
// AppMain bootstrap
// =========================

export const AppMain = (function () {

    function init() {
        ProductsFeature.init();
        CartFeature.init();
        WishlistFeature.init();
        StatsFeature.init();
        UserProfileFeature.init();
        ActivityFeature.init();
    }

    return {
        init
    };

})();

// =========================
// Start app wanneer DOM geladen is
// =========================

document.addEventListener('DOMContentLoaded', () => {
    AppMain.init();
});
