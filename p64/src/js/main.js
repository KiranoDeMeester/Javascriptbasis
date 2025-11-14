// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function updatePreview() {
    const name = document.getElementById("ev_name").value;
    const preview = document.getElementById("ev_preview");

    if (name.trim() === "") {
        preview.className = "alert alert-secondary mb-2";
        preview.textContent = "Wacht op input…";
    } else {
        preview.className = "alert alert-info mb-2";
        preview.textContent = `Hallo ${name}! 👋`;
    }
}

function handleSubmit(event) {
    event.preventDefault(); // stop page reload

    const name = document.getElementById("ev_name").value.trim();
    const status = document.getElementById("ev_status");

    if (!name) {
        status.className = "alert alert-danger mb-0 mt-3";
        status.textContent = "❌ Vul een naam in";
        return;
    }

    status.className = "alert alert-success mb-0 mt-3";
    status.textContent = ` Formulier verstuurd voor ${name}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ev_name")?.addEventListener("input", updatePreview);
    document.getElementById("ev_form")?.addEventListener("submit", handleSubmit);
});



