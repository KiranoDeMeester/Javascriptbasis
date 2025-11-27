// =========================
// features/products/productService.js
// =========================

const products = [
    { id: 1, name: 'Laptop',      price: 999 },
    { id: 2, name: 'Monitor',     price: 249 },
    { id: 3, name: 'Toetsenbord', price: 59 },
    { id: 4, name: 'Muis',        price: 39 }
];

function getAll() {
    return [...products];
}

function findById(id) {
    return products.find(p => p.id === id) || null;
}

export const ProductService = {
    getAll,
    findById
};
