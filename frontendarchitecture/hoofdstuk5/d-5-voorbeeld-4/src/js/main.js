// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
* Slechte code:
•	Je ziet: data, logica, UI en logging zitten allemaal samen.
* */

// Data/service-laag
const TodoService = (function () {
    let todos = [];

    function addTodo(label) {
        const todo = {
            id: Date.now(),
            label,
            done: false
        };
        todos.push(todo);
    }

    function getTodos() {
        return [...todos];
    }

    return {
        addTodo,
        getTodos
    };
})();

// UI-laag
const TodoUI = (function () {
    function renderList(todos) {
        const list = document.querySelector("#good_todo_list");
        list.innerHTML = todos
            .map(todo => `<li class="list-group-item">${todo.label}</li>`)
            .join("");
    }

    function getInputValue() {
        const input = document.querySelector("#good_todo_input");
        return input.value.trim();
    }

    function clearInput() {
        const input = document.querySelector("#good_todo_input");
        input.value = "";
    }

    function showError(message) {
        alert(message);
    }

    return {
        renderList,
        getInputValue,
        clearInput,
        showError
    };
})();

// App-laag
const TodoApp = (function () {
    function init() {
        const btn = document.querySelector("#good_todo_btn");
        btn.addEventListener("click", handleAddTodo);
    }

    function handleAddTodo() {
        const value = TodoUI.getInputValue();
        if (!value) {
            TodoUI.showError("Lege taak niet toegelaten");
            return;
        }

        TodoService.addTodo(value);
        const todos = TodoService.getTodos();
        TodoUI.renderList(todos);
        TodoUI.clearInput();
    }

    return {
        init
    };
})();

TodoApp.init();
