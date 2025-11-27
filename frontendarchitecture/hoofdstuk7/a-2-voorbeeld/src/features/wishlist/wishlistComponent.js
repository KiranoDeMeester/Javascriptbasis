// =========================
// features/wishlist/wishlistComponent.js
// =========================

export const WishlistComponent = (function () {

    function render(items) {
        renderBadge(items.length);
        renderList(items);
    }

    function renderBadge(count) {
        const badge = document.querySelector('#feat_wishlist_badge');
        if (!badge) return;
        badge.textContent = count;
    }

    function renderList(items) {
        const ul = document.querySelector('#feat_wishlist_list');
        if (!ul) return;

        ul.innerHTML = items
            .map(item => `<li class="list-group-item">${item.name}</li>`)
            .join('');
    }

    return {
        render
    };
})();
