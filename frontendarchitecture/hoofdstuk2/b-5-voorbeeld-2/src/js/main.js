// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

/*
* Hier zie je duidelijk:
    •	private: total, render
    •	public: add, subtract, reset, getTotal
*/
const CalculatorModule = (function () {

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

    function getTotal() {
        return total;
    }

    function render() {
        document.querySelector("#calc_total").textContent = total;
    }

    return {
        add,
        subtract,
        reset,
        getTotal
    };

})();

// knoppen koppelen
document
    .querySelector("#calc_add5")
    .addEventListener("click", () => CalculatorModule.add(5));

document
    .querySelector("#calc_add10")
    .addEventListener("click", () => CalculatorModule.add(10));

document
    .querySelector("#calc_sub3")
    .addEventListener("click", () => CalculatorModule.subtract(3));

document
    .querySelector("#calc_reset")
    .addEventListener("click", CalculatorModule.reset);

