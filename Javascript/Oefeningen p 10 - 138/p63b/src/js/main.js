// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap';

// Dark mode toggle
function toggleDarkMode() {
    const htmlNode = document.documentElement;
    const bodyNode = document.body;
    const status = document.getElementById("dm2_status");
    const label = document.getElementById("dm2_label");

    htmlNode.classList.toggle("dark-mode");
    bodyNode.classList.toggle("dark-mode");

    if (status) {
        status.textContent = htmlNode.classList.contains("dark-mode") ? "Dark mode actief 🌙" : "Light mode actief ☀️";
        label.textContent = htmlNode.classList.contains("dark-mode") ? "☀️" : "🌙";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("switchDM");
    btn?.addEventListener("click", toggleDarkMode);
});
