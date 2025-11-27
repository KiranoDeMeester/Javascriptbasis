// =========================
// features/products/index.js (ProductsFeature)
// =========================

import { ProductService } from './productService.js';
import { ProductComponent } from './productComponent.js';

export const ProductsFeature = (function () {

    function init() {
        const products = ProductService.getAll();
        ProductComponent.renderList(products);
    }

    return {
        init
    };
})();
