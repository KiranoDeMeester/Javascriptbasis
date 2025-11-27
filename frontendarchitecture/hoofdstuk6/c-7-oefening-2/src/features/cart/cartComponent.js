// =========================
// features/cart/cartComponent.js
// =========================

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
                <li class="list-group-item d-flex justify-content-between">
                  <span>${item.name}</span>
                  <span>€${item.price}</span>
                </li>
            `)
            .join('');
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
