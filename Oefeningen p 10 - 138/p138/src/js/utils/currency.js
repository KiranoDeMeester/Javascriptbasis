export function currency(value) {
    const formatter = new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR"
    });

    return formatter.format(value);
}
