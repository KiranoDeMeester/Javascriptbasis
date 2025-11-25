// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
* Belangrijk:
•	Elke module doet één ding (SoC).
•	Het wordt snel duidelijk waar je moet zijn om iets te wijzigen: service, logica of UI.
* */


// Service-laag: doet alsof hij weerdata ophaalt
const WeatherService = (function () {
    function getWeatherForCity(city) {
        // normaal: fetch naar echte API
        const temp = Math.round(Math.random() * 15) + 5;
        const desc = "Zonnig met wolken";

        return {
            city,
            temp,
            desc
        };
    }

    return {
        getWeatherForCity
    };
})();

// Logic-laag: interpreteert weerdata
const WeatherLogic = (function () {
    function getAlertTypeForTemp(temp) {
        if (temp < 10) return "alert-primary";
        if (temp < 20) return "alert-success";
        return "alert-warning";
    }

    return {
        getAlertTypeForTemp
    };
})();

// UI-laag: toont in DOM
const WeatherUI = (function () {
    function showWeather(result) {
        const div = document.querySelector("#good_weather_result");
        const alertClass = WeatherLogic.getAlertTypeForTemp(result.temp);

        div.className = `alert ${alertClass}`;
        div.textContent = `Het is ${result.temp}°C in ${result.city} – ${result.desc}`;
    }

    function showError(message) {
        const div = document.querySelector("#good_weather_result");
        div.className = "alert alert-warning";
        div.textContent = message;
    }

    return {
        showWeather,
        showError
    };
})();

// App-laag: bindt UI en services samen
const WeatherApp = (function () {
    function init() {
        const button = document.querySelector("#good_weather_btn");
        button.addEventListener("click", handleWeatherClick);
    }

    function handleWeatherClick() {
        const input = document.querySelector("#good_weather_city");
        const city = input.value.trim();
        if (!city) {
            WeatherUI.showError("Gelieve een stad in te geven.");
            return;
        }

        const result = WeatherService.getWeatherForCity(city);
        WeatherUI.showWeather(result);
        input.value = "";
    }

    return {
        init
    };
})();

WeatherApp.init();
