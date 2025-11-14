// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// --------------------------------------
// Hoofdstuk 12: DOM Selectors
// --------------------------------------
function updateChildCount() {
    const container = document.querySelector(".card-body");
    const count = container.children.length;
    document.getElementById("d13_count").textContent = count;
}

// Event binding
document.addEventListener("DOMContentLoaded", () => {
    updateChildCount();

    document.getElementById("d13_focusName")
        ?.addEventListener("click", () => {
            document.getElementById("d13_name").focus();
        });

    document.getElementById("d13_focusEmail")
        ?.addEventListener("click", () => {
            document.getElementById("d13_email").focus();
        });
});


