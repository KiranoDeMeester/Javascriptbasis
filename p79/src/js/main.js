// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function getBirthdayData(year, month, day) {
    const datum = new Date(year, month - 1, day);

    if (datum.getDate() !== day || datum.getMonth() !== month - 1) {
        return { ok: false, error: 'Ongeldige geboortedatum' };
    }

    const today = new Date();
    let age = today.getFullYear() - datum.getFullYear();
    const mDiff = today.getMonth() - datum.getMonth();
    const dDiff = today.getDate() - datum.getDate();

    if (mDiff < 0 || (mDiff === 0 && dDiff < 0)) age--;

    const dagNaam = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag',
        'Donderdag', 'Vrijdag', 'Zaterdag'][datum.getDay()];

    return { ok: true, age, dagNaam };
}

function toonLeeftijd(e) {
    e.preventDefault();

    const jaar = Number(document.getElementById('dob_year').value);
    const maand = Number(document.getElementById('dob_month').value);
    const dag = Number(document.getElementById('dob_day').value);
    const out = document.getElementById('dob_out');

    const data = getBirthdayData(jaar, maand, dag);

    if (!data.ok) {
        out.className = 'alert alert-danger mb-0';
        out.textContent = `❌ ${data.error}`;
        return;
    }

    const user = {
        dag: data.dag,
        maand: data.maand,
        jaar: data.jaar,
        dagNaam: data.dagNaam,
        age: data.age,
    }

    out.className = 'alert alert-success mb-0';
    out.textContent = `Jij bent ${user.age} jaar oud en geboren op een ${user.dagNaam}.`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('dob_btn')
        ?.addEventListener("click", toonLeeftijd);
})