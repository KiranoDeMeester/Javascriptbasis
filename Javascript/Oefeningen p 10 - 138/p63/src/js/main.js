// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap';

// Dark mode toggle
function toggleDarkMode() {
    const htmlNode = document.documentElement;
    const bodyNode = document.body;
    const status = document.getElementById("dm2_status");
    const btn = document.getElementById("dm2_btn");

    htmlNode.classList.toggle("dark-mode");
    bodyNode.classList.toggle("dark-mode");

    if (status) {
        status.textContent = htmlNode.classList.contains("dark-mode") ? "Dark mode actief :crescent_moon:" : "Light mode actief :sunny:";
        btn.textContent = htmlNode.classList.contains("dark-mode") ? "Light mode :sunny:" : "Dark mode :crescent_moon:";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("dm2_btn");
    btn?.addEventListener("click", toggleDarkMode);
});
