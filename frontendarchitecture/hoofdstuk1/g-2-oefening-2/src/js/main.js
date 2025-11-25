// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

//Start JavaScript (slechte versie, die jij moet verbeteren)
// let ex2Count = 0;
//
// document.querySelector("#ex2_btn_inc").addEventListener("click", function () {
//     ex2Count++;
//     document.querySelector("#ex2_value").textContent = ex2Count;
// });
//
// document.querySelector("#ex2_btn_reset").addEventListener("click", function () {
//     ex2Count = 0;
//     document.querySelector("#ex2_value").textContent = 0;
// });
const Ex2Counter = (function () {

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
        document.querySelector("#ex2_value").textContent = count;
    }

    return {
        increment,
        reset
    };

})();

document
    .querySelector("#ex2_btn_inc")
    .addEventListener("click", Ex2Counter.increment);

document
    .querySelector("#ex2_btn_reset")
    .addEventListener("click", Ex2Counter.reset);
