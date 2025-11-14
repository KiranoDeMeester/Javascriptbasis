// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function showBOM() {
    const data = [
        `🪟 Window breedte: ${window.innerWidth}`,
        `🖥️ Screen resolutie: ${screen.width} x ${screen.height}`,
        `🌐 User Agent: ${navigator.userAgent}`,
        `💬 Browser taal: ${navigator.language}`,
        `📡 Online: ${navigator.onLine ? "Ja" : "Nee"}`,
        `🔗 URL: ${location.href}`
    ];

    document.getElementById("bom_list").innerHTML =
        data.map(item => `<li class="list-group-item">${item}</li>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bom_btn")
        ?.addEventListener("click", showBOM);

    document.getElementById("bom_go")
        ?.addEventListener("click", () => {
            location.href = "https://google.com";
        });
});