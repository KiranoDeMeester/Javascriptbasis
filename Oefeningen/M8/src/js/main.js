import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

function isTitleValid(value) { return value.trim() !== "" }
function isDescValid(value) { return value.trim().length >= 10 }
function isEmailValid(value) { return value.includes("@") && value.includes(".") }

function updateField(input, help, valid, okText, failText) {
    help.textContent = valid ? okText : failText
    help.className = `form-text mt-1 ${valid ? "text-success" : "text-danger"}`
    input.classList.toggle("is-valid", valid)
    input.classList.toggle("is-invalid", !valid)
}

function updateStatus() {
    const title = document.getElementById("m8_title")
    const desc = document.getElementById("m8_desc")
    const email = document.getElementById("m8_email")
    const statusBox = document.getElementById("m8_status")

    const validTitle = isTitleValid(title.value)
    const validDesc = isDescValid(desc.value)
    const validEmail = isEmailValid(email.value)
    const count = [validTitle, validDesc, validEmail].filter(Boolean).length

    if (count === 0) {
        statusBox.textContent = "Nog geen velden ingevuld."
        statusBox.className = "alert alert-secondary mb-3"
    } else if (count < 3) {
        statusBox.textContent = `${count} van de 3 velden zijn ingevuld.`
        statusBox.className = "alert alert-primary mb-3"
    } else {
        statusBox.textContent = "Alle velden zijn ingevuld 🎉"
        statusBox.className = "alert alert-success mb-3"
    }
}

function updateSummary() {
    const title = document.getElementById("m8_title").value
    const desc = document.getElementById("m8_desc").value
    const email = document.getElementById("m8_email").value
    const summary = document.getElementById("m8_summary")

    if (isTitleValid(title) && isDescValid(desc) && isEmailValid(email)) {
        summary.innerHTML = `
            <li>Titel: ${title}</li>
            <li>Beschrijving: ${desc}</li>
            <li>E-mail: ${email}</li>
        `
    } else {
        summary.innerHTML = `<li class="text-muted">Samenvatting verschijnt zodra alle velden geldig zijn.</li>`
    }
}

function handleField(inputId, helpId, validator, okText, failText) {
    const input = document.getElementById(inputId)
    const help = document.getElementById(helpId)
    const group = input.parentElement

    input.addEventListener("focus", () => group.classList.add("border-primary", "shadow-sm"))
    input.addEventListener("blur", () => {
        group.classList.remove("border-primary", "shadow-sm")
        updateField(input, help, validator(input.value), okText, failText)
        updateStatus()
        updateSummary()
    })
    input.addEventListener("input", () => {
        updateField(input, help, validator(input.value), okText, failText)
        updateStatus()
        updateSummary()
    })
}

function focusFirstInvalid() {
    const fields = [
        {id: "m8_title", validator: isTitleValid},
        {id: "m8_desc", validator: isDescValid},
        {id: "m8_email", validator: isEmailValid}
    ]
    const statusBox = document.getElementById("m8_status")

    for (let f of fields) {
        const input = document.getElementById(f.id)
        if (!f.validator(input.value)) {
            input.focus()
            statusBox.textContent = "Je hebt nog onvolledige velden. We hebben je naar het eerste lege veld gebracht."
            statusBox.className = "alert alert-warning mb-3"
            return
        }
    }
    statusBox.textContent = "Alles is in orde, geen lege velden meer."
    statusBox.className = "alert alert-success mb-3"
}

document.addEventListener("DOMContentLoaded", () => {
    handleField("m8_title", "m8_title_help", isTitleValid, "OK", "Titel is verplicht")
    handleField("m8_desc", "m8_desc_help", isDescValid, "OK", "Minstens 10 tekens")
    handleField("m8_email", "m8_email_help", isEmailValid, "E-mailadres ziet er goed uit", "E-mailadres lijkt ongeldig")

    document.getElementById("m8_focus_btn")?.addEventListener("click", focusFirstInvalid)

    updateStatus()
    updateSummary()
})
