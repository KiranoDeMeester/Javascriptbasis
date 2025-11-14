// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

function bepaalFruit(fruit){
    const input = fruit.toLowerCase()

    if(input === "appel") return {text: "Je koos appel", text2: "🍎"}
    if(input === "banaan") return {text: "Je koos banaan", text2: "🍌"}

    return {text: "Waarschuwing, dit is geen fruit", text2: "❔"}
}

function toonFruit() {
    const inp = document.getElementById("fr_input");
    const out = document.getElementById("fr_text");
    const box = document.getElementById("fr_box");

    const input = inp.value.trim();

    if (!input) {
        out.className = "alert alert-warning mb-2";
        out.textContent = "⚠️ Geef een fruit in";
        box.textContent = "Geen fruit";
        return;
    }

    const resultaat = bepaalFruit(input);

    if (!resultaat.text) {
        out.className = "alert alert-danger mb-2";
        out.textContent = resultaat.text;
        box.textContent = resultaat.text2;
        return;
    }

    out.className = "alert alert-success mb-2";
    out.textContent = resultaat.text;
    box.textContent = resultaat.text2;
}

// Event koppeling
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fr_btn")
        ?.addEventListener("click", toonFruit);
});