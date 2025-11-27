// ========================= features/tableau/tableau.js =========================
export function initTableau(deck) {
    const tableau = [];


    for (let i = 0; i < 7; i++) {
        const column = deck.splice(0, i + 1);
        column[column.length - 1].faceUp = true;
        tableau.push(column);
    }


    return tableau;
}