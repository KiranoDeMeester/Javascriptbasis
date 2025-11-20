// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

// Pure berekening
function berekenVierkant(getal) {
    return getal * getal;
}

// UI handler
function handleVierkant() {
    const inp = document.getElementById('sq_input');
    const out = document.getElementById('sq_output');

    const waarde = Number(inp.value);

    if (!waarde) {
        out.className = "alert alert-warning mt-3 mb-0";
        out.textContent = "⚠️ Geef een getal in!";
        return;
    }

    const resultaat = berekenVierkant(waarde);

    out.className = "alert alert-success mt-3 mb-0";
    out.textContent = `${waarde}² = ${resultaat}`;
}

// Event koppelen
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('sq_btn')
        ?.addEventListener("click", handleVierkant);
});
