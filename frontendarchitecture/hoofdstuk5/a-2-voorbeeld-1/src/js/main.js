// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

// Eenvoudige EventBus implementatie
//JavaScript (alles in één functie) - slechte code
document
    .querySelector("#bad_weather_btn")
    .addEventListener("click", function () {
        const cityInput = document.querySelector("#bad_weather_city");
        const resultDiv = document.querySelector("#bad_weather_result");

        const city = cityInput.value.trim();
        if (city === "") {
            resultDiv.className = "alert alert-warning";
            resultDiv.textContent = "Gelieve een stad in te geven.";
            return;
        }

        // data-opbouw (fake API-resultaat)
        const temp = Math.round(Math.random() * 15) + 5;
        const desc = "Zonnig met wolken";

        // businesslogica door elkaar met UI
        if (temp < 10) {
            resultDiv.className = "alert alert-primary";
        } else {
            resultDiv.className = "alert alert-success";
        }

        resultDiv.textContent = `Het is ${temp}°C in ${city} – ${desc}`;

        // logging er nog bij
        console.log("Weer opgevraagd voor:", city, "temp:", temp);
    });
