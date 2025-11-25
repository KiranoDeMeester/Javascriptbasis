// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
Refactor deze slechte versie
* */
let ex3Count = 0;
let ex3Logs = [];

document
    .querySelector("#ex3_btn_inc")
    .addEventListener("click", function () {
        ex3Count++;
        ex3Logs.push({
            time: new Date().toLocaleTimeString(),
            value: ex3Count
        });

        document.querySelector("#ex3_value").textContent = ex3Count;

        const logUl = document.querySelector("#ex3_log");
        logUl.innerHTML = "";
        ex3Logs.forEach(entry => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between";
            li.innerHTML = `<span>${entry.time}</span><span>${entry.value}</span>`;
            logUl.appendChild(li);
        });
    });

