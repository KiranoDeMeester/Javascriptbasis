// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import {getElement} from "bootstrap/js/src/util";

//eigen js
function updateChildCount() {
    const container = document.querySelector(".card-body");
    const count = container.children.length;
    document.getElementById("ft_count").textContent = count;
}
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("ft_input");

    updateChildCount();

    input.addEventListener("input", () => {
        input.style.border = "2px solid blue";
    });

    input.addEventListener("input", () => {
        input.style.border = "2px solid #ccc";
    });

    document.getElementById("ft_btn")?.addEventListener("click", () => {
        input.focus();
    })
})


