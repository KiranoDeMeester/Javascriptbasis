// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

//JavaScript (slechte versie)
/*
* Wat is hier mis?
•	Eén event handler doet alles: input lezen, valideren, state aanpassen, UI updaten.
•	Variabele tasks is globaal, alles kan die aanpassen.
•	Er is geen module, geen scheiding, geen herbruikbare functies.
* */
let tasks = [];

document.querySelector("#spag_btn_add").addEventListener("click", function () {
    const input = document.querySelector("#spag_input");
    const value = input.value;

    if (value.trim() === "") {
        alert("Geef een taak in");
        return;
    }

    tasks.push(value);

    const list = document.querySelector("#spag_list");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = tasks[i];
        list.appendChild(li);
    }

    input.value = "";
});

