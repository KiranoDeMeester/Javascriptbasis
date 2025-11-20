// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

function leesSecret() {
    const binnen = "Code unlocked";

    function inner(){
        return `${binnen} 🗝`;
    }

    return inner();
}

function geheimBericht() {
    const output = document.getElementById("sc2_output");

    //  inner sees outer
    const geheim = leesSecret();

    output.className = "alert alert-success mb-0";
    output.textContent = geheim;
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sc2_btn")
        ?.addEventListener("click", geheimBericht);
});