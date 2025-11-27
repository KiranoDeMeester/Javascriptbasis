// =========================
// core/main.js
// =========================

import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

// ========================= core/main.js =========================
import { eventBus } from './eventBus.js';
import { createDeck } from '../features/deck/deck.js';
import { initTableau } from '../features/tableau/tableau.js';
import { initFoundations } from '../features/foundations/foundations.js';
import { initStock } from '../features/stock/stock.js';
import { renderGame } from '../features/ui/renderer.js';


function init() {
    const deck = createDeck();
    initTableau(deck);
    initFoundations();
    initStock(deck);
    renderGame();


    eventBus.emit('game:init');
}


init();
