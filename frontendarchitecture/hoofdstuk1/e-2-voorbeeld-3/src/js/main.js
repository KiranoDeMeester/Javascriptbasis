// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

//JavaScript (goede versie met functie-scheiding)
/*
* Wat is hier beter? (korte bullets)
Private state dankzij een IIFE → items zit niet langer in de globale scope.
Module Pattern gebruikt → alleen handleAdd is publiek, rest blijft intern.
Duidelijke scheiding tussen UI en data:
    addItem() = data
    render() = UI
    handleAdd() = controle-flow
Event handler is schoon en kort → logica zit niet in de klikfunctie.
Minder herhaling van DOM-selectors → efficiënter, overzichtelijker.
Makkelijker uitbreidbaar → per functie één duidelijke verantwoordelijkheid.
Minder foutgevoelig → geen globale variabelen, geen spaghetti-code.
* */
const ListApp = (function () {

    let items = [];

    function handleAdd() {
        const input = document.querySelector("#list_input");
        const value = input.value.trim();
        if (value === "") return;

        addItem(value);
        render();
        input.value = "";
    }

    function addItem(value) {
        items.push(value);
    }

    function render() {
        const list = document.querySelector("#list_output");
        list.innerHTML = items
            .map(item => `<li class="list-group-item">${item}</li>`)
            .join("");
    }

    return {
        handleAdd
    };

})();

document
    .querySelector("#list_btn_add")
    .addEventListener("click", ListApp.handleAdd);
