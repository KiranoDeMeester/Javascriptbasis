// ========================= features/deck/deck.js =========================
import { Card } from './card.js';


export function createDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13];


    const deck = [];
    for (const s of suits) {
        for (const r of ranks) deck.push(new Card(s, r));
    }


// Shuffle
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }


    return deck;
}