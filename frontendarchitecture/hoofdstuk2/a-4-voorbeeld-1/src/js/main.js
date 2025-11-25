// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

/*
* Belangrijk:
•	count is privé → niemand kan CounterModule.count rechtstreeks aanpassen.
•	UI-updates gebeuren consequent via render().
*/
const CounterModule = (function () {

    // private state
    let count = 0;

    // private helper
    function render() {
        const el = document.querySelector("#mod_counter_value");
        el.textContent = count;
    }

    // public methods
    function increment() {
        count++;
        render();
    }

    function decrement() {
        count--;
        render();
    }

    function reset() {
        count = 0;
        render();
    }

    // onthul enkel wat buiten nodig is
    return {
        increment,
        decrement,
        reset
    };

})();

// events koppelen (buiten de module)
document
    .querySelector("#mod_counter_inc")
    .addEventListener("click", CounterModule.increment);

document
    .querySelector("#mod_counter_dec")
    .addEventListener("click", CounterModule.decrement);

document
    .querySelector("#mod_counter_reset")
    .addEventListener("click", CounterModule.reset);
