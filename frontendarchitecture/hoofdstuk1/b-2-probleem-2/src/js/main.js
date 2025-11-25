// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

//JavaScript (slechte versie)
/*
* Wat is hier mis?
•	badCount is globaal.
•	Renderlogica zit in beide handlers (duplicatie).
•	Geen module, geen duidelijke verantwoordelijke voor “teller functionaliteit”.
* */

let badCount = 0;

document.querySelector("#bad_counter_inc").addEventListener("click", function () {
    badCount++;
    document.querySelector("#bad_counter_value").textContent = badCount;
});

document.querySelector("#bad_counter_reset").addEventListener("click", function () {
    badCount = 0;
    document.querySelector("#bad_counter_value").textContent = 0;
});
