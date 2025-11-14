//import van onze custom css
import '../scss/styles.scss'

//import all of bootstrap zijn js
import * as bootstrap from 'bootstrap'

//eigen javascript
document.addEventListener('DOMContentLoaded', () => {
    //card1
    const btn = document.getElementById('btnTest');
    const out = document.getElementById('out');

    btn.addEventListener('click', () => {
        out.textContent = 'Alles werkt, klaar voor de oefeningen!';
        out.className = 'alert alert-success mt-3 mb-0';
    })
    out.addEventListener('mouseover', () => {
        out.className = 'alert alert-danger mt-3 mb-0';
    })
    out.addEventListener('mouseleave', () => {
        out.className = 'alert alert-secondary mt-3 mb-0';
    })

    //card2
    const inpName = document.getElementById('inpName');
    const btnName = document.getElementById('btnName');
    const nameOut = document.getElementById('nameOut');

    btnName.addEventListener('click', () => {
        const naam = inpName.value.trim();
        if (!naam){
            nameOut.className = 'alert alert-warning mt-3 mb-0';
            nameOut.textContent = 'Vul je naam in!';
            return
        }
        nameOut.className = 'alert alert-success mt-3 mb-0';
        nameOut.textContent = `Welkom, ${naam}`;
    })
})