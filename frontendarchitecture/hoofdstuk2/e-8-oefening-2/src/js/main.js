// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

/*
* Module met:
•	privé total
•	add(amount), subtract(amount), reset()
•	centrale render()
*/
const Ex2CalculatorModule = (function () {

    let total = 0;

    function add(amount) {
        total += amount;
        render();
    }

    function subtract(amount) {
        total -= amount;
        render();
    }

    function reset() {
        total = 0;
        render();
    }

    function render() {
        document.querySelector("#ex2_total").textContent = total;
    }

    return {
        add,
        subtract,
        reset
    };

})();

// events koppelen
document
    .querySelector("#ex2_add2")
    .addEventListener("click", () => Ex2CalculatorModule.add(2));

document
    .querySelector("#ex2_add10")
    .addEventListener("click", () => Ex2CalculatorModule.add(10));

document
    .querySelector("#ex2_sub4")
    .addEventListener("click", () => Ex2CalculatorModule.subtract(4));

document
    .querySelector("#ex2_reset")
    .addEventListener("click", Ex2CalculatorModule.reset);
