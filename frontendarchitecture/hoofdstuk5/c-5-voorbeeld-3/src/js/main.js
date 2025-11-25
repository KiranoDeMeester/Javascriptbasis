// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
* Slechte code:
•	Je ziet: data, logica, UI en logging zitten allemaal samen.
* */

let badTodos = [];

document
    .querySelector("#bad_todo_btn")
    .addEventListener("click", function () {
        const input = document.querySelector("#bad_todo_input");
        const value = input.value;

        if (value.trim() === "") {
            alert("Lege taak niet toegelaten");
            return;
        }

        // data en logica
        badTodos.push({
            id: Date.now(),
            label: value.trim(),
            done: false
        });

        // UI update
        const list = document.querySelector("#bad_todo_list");
        list.innerHTML = "";
        badTodos.forEach(todo => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = todo.label;
            list.appendChild(li);
        });

        // logging
        console.log("Nieuw todo:", value);

        input.value = "";
    });
