// =========================
// features/products/productComponent.js
// =========================

import { CoreEventBus } from '../../core/eventBus.js';
import { ProductService } from './productService.js';

export const ProductComponent = (function () {

    function renderList(products) {
        const container = document.querySelector('#feat_products_container');
        if (!container) return;

        container.innerHTML = products.map(p => `
          <div class="col-md-3">
            <div class="card h-100 shadow-sm">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${p.name}</h5>
                <p class="card-text mb-2">€${p.price}</p>
                <button
                  class="btn btn-sm btn-primary mt-auto feat_btn_add_to_cart"
                  data-id="${p.id}"
                >
                  Voeg toe aan cart
                </button>
                <button
                  class="btn btn-sm btn-outline-danger mt-2 feat_btn_add_wishlist"
                  data-id="${p.id}"
                >
                  ❤ Wishlist
                </button>
              </div>
            </div>
          </div>
        `).join('');

        // Cart-knoppen
        container
            .querySelectorAll('.feat_btn_add_to_cart')
            .forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = Number(btn.getAttribute('data-id'));
                    const product = ProductService.findById(id);
                    if (product) {
                        CoreEventBus.publish('CART_ADD', { product });
                    }
                });
            });

        // Wishlist-knoppen
        container
            .querySelectorAll('.feat_btn_add_wishlist')
            .forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = Number(btn.getAttribute('data-id'));
                    const product = ProductService.findById(id);
                    if (product) {
                        CoreEventBus.publish('WISHLIST_ADD', { product });
                    }
                });
            });
    }

    return {
        renderList
    };
})();
