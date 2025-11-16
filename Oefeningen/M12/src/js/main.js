import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {

    const dateInput = document.getElementById("m11_date")
    const btn = document.getElementById("m11_btn")
    const status = document.getElementById("m11_status")
    const summary = document.getElementById("m11_summary")
    const daysOfWeek = ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag']

    function calculateAge(birth, now) {
        let age = now.getFullYear() - birth.getFullYear()
        const thisYearBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate())
        if (now < thisYearBirthday) age--
        return age
    }

    function nextBirthday(birth, now) {
        let next = new Date(now.getFullYear(), birth.getMonth(), birth.getDate())
        if (next < now) next = new Date(now.getFullYear() + 1, birth.getMonth(), birth.getDate())
        return next
    }

    function daysUntil(date, now) {
        const diffMs = date - now
        return Math.ceil(diffMs / (1000 * 60 * 60 * 24))
    }

    function updateSummary(birth) {
        const now = new Date()
        const age = calculateAge(birth, now)
        const dayName = daysOfWeek[birth.getDay()]
        const next = nextBirthday(birth, now)
        const remainingDays = daysUntil(next, now)

        status.textContent = `Je bent ongeveer ${age} jaar oud. Je bent geboren op een ${dayName}.`
        status.className = "alert alert-success mb-3"

        summary.innerHTML = `
      <li>Leeftijd: ${age} jaar</li>
      <li>Geboortedag: ${dayName}</li>
      <li>Volgende verjaardag: ${next.toLocaleDateString()}</li>
      <li>Dagen tot volgende verjaardag: ${remainingDays}</li>
    `
    }

    btn.addEventListener("click", () => {
        const value = dateInput.value
        if (!value) {
            status.textContent = "Vul een geldige geboortedatum in."
            status.className = "alert alert-warning mb-3"
            summary.innerHTML = `<li class="text-muted">Samenvatting verschijnt zodra een geldige geboortedatum is berekend.</li>`
            return
        }

        const birth = new Date(value)
        if (isNaN(birth)) {
            status.textContent = "Vul een geldige geboortedatum in."
            status.className = "alert alert-warning mb-3"
            summary.innerHTML = `<li class="text-muted">Samenvatting verschijnt zodra een geldige geboortedatum is berekend.</li>`
            return
        }

        updateSummary(birth)
    })

})
