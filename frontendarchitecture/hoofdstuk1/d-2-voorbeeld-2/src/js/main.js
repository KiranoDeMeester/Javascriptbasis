// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

//JavaScript (goede versie met functie-scheiding)
/*
* Wat is hier beter?
•	handleSave coördineert alleen de stappen.
•	Validatie, state update en render zijn aparte functies.
•	Makkelijk uitbreidbaar, testbaar en leesbaar.
* */

const UserApp = (function () {

    let users = [];

    function handleSave() {
        const input = document.querySelector("#user2_name");
        const name = input.value.trim();

        if (!isValidName(name)) {
            alert("Naam moet minstens 3 tekens hebben");
            return;
        }

        addUser(name);
        renderList();
        input.value = "";
    }

    function isValidName(name) {
        return name.length >= 3;
    }

    function addUser(name) {
        users.push(name);
        // later kan hier ook een API-call komen
    }

    function renderList() {
        const list = document.querySelector("#user2_list");
        list.innerHTML = "";
        users.forEach(u => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = u;
            list.appendChild(li);
        });
    }

    return {
        handleSave
    };

})();

document
    .querySelector("#user2_btn_save")
    .addEventListener("click", UserApp.handleSave);
