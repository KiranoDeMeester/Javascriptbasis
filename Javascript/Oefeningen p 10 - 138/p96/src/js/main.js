// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function showDevice(){
    const device = [
        `📡 Online: ${navigator.onLine ? "Ja" : "Nee"}`,
        `Touch: ${navigator.maxTouchPoints >= 1 ? "Ja" : "Nee"}`,
        `Device: ${window.innerWidth < 768 ? "Tablet" : window.innerWidth < 1024 ? "Laptop" : "Desktop"}`,
        `Taal: ${navigator.language}`,
        `Besturingssysteem: ${navigator.userAgent.includes("Windows") ? "Windows" : navigator.userAgent.includes("Mac") ? "Mac" : navigator.userAgent.includes("Linux") ? "Linux" : "Onbekend"}`,
    ]

    document.getElementById("dc_list").innerHTML =
        device.map(item => `<li class="list-group-item">${item}</li>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dc_btn")
        ?.addEventListener("click", showDevice)
});