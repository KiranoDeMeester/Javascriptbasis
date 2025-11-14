// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

function welkomsBericht(naam, leeftijd){
    const bericht = `Welkom, ${naam}! Jij bent ${leeftijd} jaar oud.`
    return bericht;
}

function handleWelkomClick(){
    const naamInput = document.getElementById('input_n')
    const leeftijdInput = document.getElementById('input_l')
    const output = document.getElementById('berichtBox')
    const naam = naamInput.value.trim();
    const leeftijd = leeftijdInput.value.trim();

    if(!naam || !leeftijd){
        output.className = "alert alert-warning"
        output.textContent = "Geef een naam en leeftijd in!"
        return
    }

    const boodschap = welkomsBericht(naam, leeftijd)
    output.textContent = boodschap;
    output.className="alert alert-success"
}

document.addEventListener("DOMContentLoaded", () => {
    const btnWelkom = document.getElementById('btnWelkom')
    btnWelkom.addEventListener("click", handleWelkomClick);
});