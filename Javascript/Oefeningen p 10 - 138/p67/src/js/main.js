// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function validateEmail(email) {
    return !!(email.includes("@") && email.includes(".") && !email.includes(" "));
}

function updatePreview() {
    const email = document.getElementById("em_input").value;
    const preview = document.getElementById("em_preview");

    if (!validateEmail(email)) {
        preview.className = "alert alert-secondary mb-2";
        preview.textContent = "❌ ongeldig";
    } else {
        preview.className = "alert alert-info mb-2";
        preview.textContent = `✔️ geldig`;
    }

}

function handleSubmit(event){
    event.preventDefault();

    const email = document.getElementById("em_input").value.trim();
    const status = document.getElementById("em_status");

    if(validateEmail(email)){
        status.className = "alert alert-success mb-0 mt-3";
        status.textContent = `Email geaccepteerd ${email}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("em_input")?.addEventListener("input", updatePreview);
    document.getElementById("em_form")?.addEventListener("submit", handleSubmit);
});