// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
Refactor deze slechte versie
* */
const Ex3CounterService = (function () {
    let count = 0;
    let logs = [];

    function increment() {
        count++;
        logs.push({
            time: new Date().toLocaleTimeString(),
            value: count
        });
    }

    function getCount() {
        return count;
    }

    function getLogs() {
        return [...logs];
    }

    return {
        increment,
        getCount,
        getLogs
    };
})();

// UI-laag
const Ex3CounterUI = (function () {
    function renderCount(count) {
        document.querySelector("#ex3_value").textContent = count;
    }

    function renderLog(logs) {
        const ul = document.querySelector("#ex3_log");
        ul.innerHTML = logs
            .map(entry => `
                <li class="list-group-item d-flex justify-content-between">
                  <span>${entry.time}</span>
                  <span>${entry.value}</span>
                </li>
            `)
            .join("");
    }

    return {
        renderCount,
        renderLog
    };
})();

// App-laag
const Ex3CounterApp = (function () {
    function init() {
        document
            .querySelector("#ex3_btn_inc")
            .addEventListener("click", handleIncrement);
    }

    function handleIncrement() {
        Ex3CounterService.increment();
        const count = Ex3CounterService.getCount();
        const logs = Ex3CounterService.getLogs();
        Ex3CounterUI.renderCount(count);
        Ex3CounterUI.renderLog(logs);
    }

    return {
        init
    };
})();

Ex3CounterApp.init();
