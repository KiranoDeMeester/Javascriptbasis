// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
document.addEventListener("DOMContentLoaded", () => {
    const btnRood = document.getElementById("ks_red");
    const btnBlauw = document.getElementById("ks_blue");
    const btnGroen = document.getElementById("ks_green");

    btnRood.addEventListener("click", () => {
        const boxen = document.querySelectorAll(".kleur-box");

        boxen.forEach(box => {
            box.style.backgroundColor = "red";
        })
    })
    btnBlauw.addEventListener("click", () => {
        const boxen = document.querySelectorAll(".kleur-box");

        boxen.forEach(box => {
            box.style.backgroundColor = "blue";
        })
    })
    btnGroen.addEventListener("click", () => {
        const boxen = document.querySelectorAll(".kleur-box");

        boxen.forEach(box => {
            box.style.backgroundColor = "green";
        })
    })
})