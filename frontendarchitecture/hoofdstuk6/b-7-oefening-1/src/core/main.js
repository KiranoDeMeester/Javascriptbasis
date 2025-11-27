// =========================
// core/main.js
// =========================

import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

import { ProductsFeature } from '../features/products/index.js';
import { CartFeature } from '../features/cart/index.js';
import { WishlistFeature } from '../features/wishlist/index.js';

export const AppMain = (function () {
    function init() {
        ProductsFeature.init();
        CartFeature.init();
        WishlistFeature.init();
    }

    return {
        init
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    AppMain.init();
});
