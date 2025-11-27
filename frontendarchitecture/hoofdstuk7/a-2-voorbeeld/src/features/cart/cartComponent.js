// =========================
// features/cart/cartComponent.js
// =========================

import { CoreEventBus } from '../../core/eventBus.js';

export const CartComponent = (function () {

    function render(items, total) {
        renderBadge(items.length);
        renderList(items);
        renderTotal(total);
    }

    function renderBadge(count) {
        const badge = document.querySelector('#feat_cart_badge');
        if (!badge) return;
        badge.textContent = count;
    }

    function renderList(items) {
        const ul = document.querySelector('#feat_cart_list');
        if (!ul) return;

        ul.innerHTML = items
            .map(item => `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <span>${item.name} – €${item.price}</span>
                  <button
                    class="btn btn-sm btn-outline-danger feat_btn_cart_remove"
                    data-id="${item.id}"
                  >
                    Verwijder
                  </button>
                </li>
            `)
            .join('');

        // remove events
        ul.querySelectorAll('.feat_btn_cart_remove').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = Number(btn.getAttribute('data-id'));
                CoreEventBus.publish('CART_REMOVE', { id });
            });
        });
    }

    function renderTotal(total) {
        const div = document.querySelector('#feat_cart_total');
        if (!div) return;

        div.textContent = `Totaal: €${total.toFixed(2)}`;
    }

    return {
        render
    };
})();
