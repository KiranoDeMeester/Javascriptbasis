// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

function toonBericht() {
    const binnen = "Ik leef binnen de functie 👀";

    function inner() {
        return `Inner ziet: ${binnen}`;
    }

    return inner();
}

function handleScope() {
    const output = document.getElementById("sc_output");

    //  inner sees outer
    const bericht = toonBericht();

    output.className = "alert alert-success mb-0";
    output.textContent = bericht;

    // try {
    //     // ❌ buiten de functie proberen de variabele te gebruiken
    //     console.log(binnen);
    // } catch (err) {
    //     console.warn("binnen is niet zichtbaar buiten de functie");
    // }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sc_btn")
        ?.addEventListener("click", handleScope);
});