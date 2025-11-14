// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const telOp = (a, b) => a + b;

// UI handler (arrow + block body)
const verwerkSom = () => {
    const n1 = Number(document.getElementById("af_num1").value);
    const n2 = Number(document.getElementById("af_num2").value);
    const out = document.getElementById("af_out");

    if (!n1 || !n2) {
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul twee getallen in`;
        return;
    }

    const resultaat = telOp(n1, n2);

    out.className = "alert alert-success mb-0";
    out.textContent = `Resultaat: ${n1} + ${n2} = ${resultaat}`;
};

// Event
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("af_btn")
        ?.addEventListener("click", verwerkSom);
});