// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

/*
Je bouwt een module die:
•	taken bewaart in een array
•	taken rendert in een lijst
•	via een filter-input taken live filtert
*/
const Ex3TodoModule = (function () {

    let todos = [];
    let filterText = "";

    function handleAdd() {
        const input = document.querySelector("#ex3_new");
        const value = input.value.trim();
        if (value === "") return;

        addTodo(value);
        input.value = "";
        render();
    }

    function handleFilterChange() {
        const input = document.querySelector("#ex3_filter");
        filterText = input.value.trim().toLowerCase();
        render();
    }

    function addTodo(label) {
        todos.push({
            id: Date.now(),
            label
        });
    }

    function getFilteredTodos() {
        if (!filterText) {
            return todos;
        }
        return todos.filter(todo =>
            todo.label.toLowerCase().includes(filterText)
        );
    }

    function render() {
        const list = document.querySelector("#ex3_list");
        const visibleTodos = getFilteredTodos();

        list.innerHTML = visibleTodos
            .map(todo => `<li class="list-group-item">${todo.label}</li>`)
            .join("");
    }

    return {
        handleAdd,
        handleFilterChange
    };

})();

document
    .querySelector("#ex3_btn_add")
    .addEventListener("click", Ex3TodoModule.handleAdd);

document
    .querySelector("#ex3_filter")
    .addEventListener("input", Ex3TodoModule.handleFilterChange);
