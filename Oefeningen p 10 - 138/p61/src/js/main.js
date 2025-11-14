// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function toggleHighlight() {
    const boxes = document.querySelectorAll(".cl-box");
    boxes.forEach(box => box.classList.toggle("x"));
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cl_toggle")
        ?.addEventListener("click", toggleHighlight);
});


