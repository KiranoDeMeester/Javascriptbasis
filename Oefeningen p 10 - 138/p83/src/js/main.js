// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const users = [];

function User(name, age) {
    this.name = name;
    this.age = age;
    this.info = function() {
        return `${this.name} (${this.age} jaar)`;
    };
}

function addUser() {
    const name = document.getElementById("uc_name").value.trim();
    const age = document.getElementById("uc_age").value.trim();
    const list = document.getElementById("uc_list");

    if (!name || !age) return;

    const user = new User(name, Number(age));
    users.push(user);

    list.innerHTML = users
        .map(u => `<li class="list-group-item">${u.info()}</li>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("uc_btn")
        ?.addEventListener("click", addUser);
});