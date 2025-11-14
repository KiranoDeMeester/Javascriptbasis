// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// ---------------------------------------------
// Hoofdstuk 20: ES6 Classes + extends + super
// ---------------------------------------------

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return `${this.name} (${this.age} jaar)`;
    }
}

class Admin extends User {
    constructor(name, age) {
        super(name, age);
        this.role = "Admin";
    }

    info() {
        return `[ADMIN] ${super.info()}`;
    }
}

const clsUsers = [];

function addClassUser() {
    const name = document.getElementById("cls_name").value.trim();
    const age = Number(document.getElementById("cls_age").value);
    const role = document.getElementById("cls_role").value;
    const list = document.getElementById("cls_list");

    if (!name || !age) return;

    const user = role === "admin"
        ? new Admin(name, age)
        : new User(name, age);

    clsUsers.push(user);

    list.innerHTML = clsUsers
        .map(u => `<li class="list-group-item">${u.info()}</li>`)
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cls_btn")
        ?.addEventListener("click", addClassUser);
});
