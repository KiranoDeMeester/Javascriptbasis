export async function fetchProducts() {
    const res = await fetch("/data/products.json");

    if (!res.ok) {
        throw new Error("Kon producten niet laden");
    }

    return await res.json();
}
