// =========================
// core/main.js
// =========================

// globale styles + bootstrap
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

// Features
import { ProductsFeature } from '../features/products/index.js';
import { CartFeature } from '../features/cart/index.js';
import { WishlistFeature } from '../features/wishlist/index.js';
import { UserProfileFeature } from '../features/userProfile/index.js';

// =========================
// AppMain bootstrap
// =========================

export const AppMain = (function () {

    function init() {
        // Init elke feature afzonderlijk
        ProductsFeature.init();
        CartFeature.init();
        WishlistFeature.init();
        UserProfileFeature.init();   // nieuwe feature
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
