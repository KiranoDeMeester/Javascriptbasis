// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

//JavaScript (goede versie als module)
/*
* Wat is hier beter?
•	count is privé binnen het module blok.
•	UI-updates gebeuren altijd via render().
•	Verantwoordelijkheden zijn duidelijk.
*/
const CounterModule = (function () {

    let count = 0;

    function increment() {
        count++;
        render();
    }

    function reset() {
        count = 0;
        render();
    }

    function render() {
        const el = document.querySelector("#good_counter_value");
        el.textContent = count;
    }

    // publieke functies
    return {
        increment,
        reset
    };

})();

// event listeners buiten de module
document
    .querySelector("#good_counter_inc")
    .addEventListener("click", CounterModule.increment);

document
    .querySelector("#good_counter_reset")
    .addEventListener("click", CounterModule.reset);

