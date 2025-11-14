// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const taken2 = [];

function renderTodos() {
    const list = document.getElementById("todo_list2");

    list.innerHTML = taken2
        .map((task, index) => `
      <li class="list-group-item d-flex justify-content-between align-items-center ${task.done ? "todo-done" : ""}">
        <span class="todo-text" data-idx="${index}">
           ${task.text}
        </span>
        <button class="btn btn-sm btn-danger todo-del" data-idx="${index}">X</button>
      </li>
    `)
        .join("");
}

function addTodo(e) {
    e.preventDefault();

    const inp = document.getElementById("todo_input2");
    const msg = document.getElementById("todo_msg2");
    const text = inp.value.trim();

    if (!text) {
        msg.className = "alert alert-danger mb-3";
        msg.textContent = "❌ Vul een taak in";
        return;
    }

    taken2.push({ text, done: false });

    msg.className = "alert alert-success mb-3";
    msg.textContent = ` Taak toegevoegd: ${text}`;

    inp.value = "";
    renderTodos();
}

function handleTodoClick(e) {
    const idx = e.target.dataset.idx;

    // Toggle done
    if (e.target.classList.contains("todo-text")) {
        taken2[idx].done = !taken2[idx].done;
        renderTodos();
        return;
    }

    // Delete
    if (e.target.classList.contains("todo-del")) {
        taken2.splice(idx, 1);
        renderTodos();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("todo_form2")?.addEventListener("submit", addTodo);
    document.getElementById("todo_list2")?.addEventListener("click", handleTodoClick);
});