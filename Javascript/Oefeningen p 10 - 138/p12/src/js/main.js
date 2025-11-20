// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

//pure function
function maakGroet(naam){
    return `Hallo ${naam}!`
}

//impure function
function handleGroetClick(){
    const naamInput = document.getElementById('fn_nameInput')
    const output = document.getElementById('fn_output')
    const naam = naamInput.value.trim();

    if(!naam){
        output.className = "alert alert-warning mt-3 mb-0"
        output.textContent = "Geef een naam in!"
        return
    }
    const boodschap = maakGroet(naam)

    output.textContent = boodschap;
    output.className="alert alert-success mt-3 mb-0"
}

//Event koppelen
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('fn_btnGreet')
//         ?.addEventListener("click", handleGroetClick);
// });
document.addEventListener("DOMContentLoaded", () => {
    const btnGreet = document.getElementById('fn_btnGreet')
    btnGreet.addEventListener("click", handleGroetClick);
});