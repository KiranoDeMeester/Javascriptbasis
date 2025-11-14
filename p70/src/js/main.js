// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
document.addEventListener("DOMContentLoaded", () => {

    // 1) Link blokkeren
    document.getElementById("ev_link")
        ?.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("ev_msg2").textContent =
                "🚫 Navigatie geblokkeerd door JS";
        });

    // 2) Hover effects
    const box = document.getElementById("ev_box");

    box.addEventListener("mouseover", () => {
        box.classList.add("bg-warning");
        box.textContent = "Hover actief!";
    });

    box.addEventListener("mouseleave", () => {
        box.classList.remove("bg-warning");
        box.textContent = "Hover over mij 🖱️";
    });

    // 3) Form prevent + feedback
    document.getElementById("ev_form2")
        ?.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("ev_input2").value.trim();
            const msg = document.getElementById("ev_msg2");

            if (!name) {
                msg.className = "alert alert-danger mt-3 mb-0";
                msg.textContent = "❌ Vul je naam in";
                return;
            }

            msg.className = "alert alert-success mt-3 mb-0";
            msg.textContent = ` Form verzonden voor ${name} (zonder reload!)`;
        });
});