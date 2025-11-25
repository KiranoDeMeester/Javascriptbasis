// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

/*
* Opdracht: schrijf in tekst (bijvoorbeeld in comments of in een apart document) minstens 5 architectuurproblemen.
* notes en lastnote zijn globaal
* één event handler
* ui render staat ook in de handler
* er is geen module
* fetch-call zit hardcoded in de ui handler
* geen scheiding van concerns data, logica en ui door elkaar.

* */

let notes = [];
let lastNote = "";

document.querySelector("#notes_btn_add").addEventListener("click", function () {
    const input = document.querySelector("#notes_input");
    const value = input.value;

    if (value === "") {
        alert("Leeg");
    } else {
        notes.push(value);
        lastNote = value;
    }

    const list = document.querySelector("#notes_list");
    list.innerHTML = "";

    for (let i = 0; i < notes.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = notes[i];
        list.appendChild(li);
    }

    fetch("/api/log?last=" + lastNote);

    input.value = "";
});

