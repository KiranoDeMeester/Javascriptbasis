// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const isEven = num => num % 2 === 0;

const checkEven = () => {
    const inp = Number(document.getElementById("ev_input").value);
    const out = document.getElementById("ev_out");

    if (!inp) {
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul een getal in`;
        return;
    }
    //manier 1
    // if (isEven(inp)) {
    //     out.className = "alert alert-success mb-0";
    //     out.textContent = `${inp} is EVEN`;
    // } else {
    //     out.className = "alert alert-danger mb-0";
    //     out.textContent = `${inp} is ONEVEN ❌`;
    // }

    //manier 2
    // const even = isEven(inp);
    //
    // out.className = even
    //     ? "alert alert-success mb-0"
    //     : "alert alert-danger mb-0";
    //
    // out.textContent = even
    //     ? `${inp} is EVEN`
    //     : `${inp} is ONEVEN ❌`

    //manier 3
    const even = isEven(inp);
    ev_out.className = `alert ${even ? "alert-success" : "alert-danger"} mb-0`;
    ev_out.textContent = `${inp} is ${even ? "EVEN" : "ONEVEN ❌"}`;
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ev_btn")
        ?.addEventListener("click", checkEven);
});
