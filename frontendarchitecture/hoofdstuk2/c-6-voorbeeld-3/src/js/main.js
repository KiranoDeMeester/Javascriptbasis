// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

/*
Deze module combineert data en UI voor een kleine component.
*/
const TodoModule = (function () {

    let todos = [];

    function handleAdd() {
        const input = document.querySelector("#todo_mod_input");
        const value = input.value.trim();
        if (value === "") return;

        addTodo(value);
        render();
        input.value = "";
    }

    function addTodo(label) {
        todos.push({
            id: Date.now(),
            label
        });
    }

    function render() {
        const list = document.querySelector("#todo_mod_list");
        list.innerHTML = todos
            .map(todo => `<li class="list-group-item">${todo.label}</li>`)
            .join("");
    }

    return {
        handleAdd
    };

})();

document
    .querySelector("#todo_mod_add")
    .addEventListener("click", TodoModule.handleAdd);
