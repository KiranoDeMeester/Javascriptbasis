import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {

    function isNameValid(value) { return value.trim().length >= 2 }
    function isEmailValid(value) { return value.includes("@") && value.includes(".") }
    function isMsgValid(value) { return value.trim().length >= 10 }

    function updateField(input, help, valid, okText, failText) {
        help.textContent = valid ? okText : failText
        help.className = `form-text mt-1 ${valid ? "text-success" : "text-danger"}`
        input.classList.toggle("is-valid", valid)
        input.classList.toggle("is-invalid", !valid)
    }

    function validateAll() {
        const name = document.getElementById("m9_name")
        const email = document.getElementById("m9_email")
        const msg = document.getElementById("m9_msg")
        return {
            name: isNameValid(name.value),
            email: isEmailValid(email.value),
            msg: isMsgValid(msg.value)
        }
    }

    function updateSummaryAndStatus(isSubmit=false) {
        const statusBox = document.getElementById("m9_status")
        const summary = document.getElementById("m9_summary")
        const valid = validateAll()
        const count = Object.values(valid).filter(v => v).length

        if(isSubmit) {
            if(count < 3) {
                statusBox.textContent = "Er zijn nog fouten in het formulier. Controleer de gemarkeerde velden."
                statusBox.className = "alert alert-warning mb-3"
            } else {
                statusBox.textContent = "Formulier is geldig en werd virtueel verzonden."
                statusBox.className = "alert alert-success mb-3"
            }
        }

        if(count === 3) {
            summary.innerHTML = `
        <li>Naam: ${document.getElementById("m9_name").value}</li>
        <li>E-mail: ${document.getElementById("m9_email").value}</li>
        <li>Bericht: ${document.getElementById("m9_msg").value}</li>
      `
        } else {
            summary.innerHTML = `<li class="text-muted">Samenvatting verschijnt wanneer het formulier geldig is verzonden.</li>`
        }
    }

    function handleField(inputId, helpId, validator, okText, failText) {
        const input = document.getElementById(inputId)
        const help = document.getElementById(helpId)

        input.addEventListener("input", () => {
            updateField(input, help, validator(input.value), okText, failText)
            updateSummaryAndStatus()
        })
        input.addEventListener("blur", () => {
            updateField(input, help, validator(input.value), okText, failText)
            updateSummaryAndStatus()
        })
    }

    handleField("m9_name", "m9_name_help", isNameValid, "Naam is ok", "Naam is verplicht (minstens 2 tekens)")
    handleField("m9_email", "m9_email_help", isEmailValid, "E-mail is ok", "E-mailadres moet een @ en een punt bevatten")
    handleField("m9_msg", "m9_msg_help", isMsgValid, "Bericht is ok", "Bericht is verplicht (minstens 10 tekens)")

    document.getElementById("m9_form").addEventListener("submit", (e) => {
        e.preventDefault()
        const valid = validateAll()

        updateField(document.getElementById("m9_name"), document.getElementById("m9_name_help"), valid.name, "Naam is ok", "Naam is verplicht (minstens 2 tekens)")
        updateField(document.getElementById("m9_email"), document.getElementById("m9_email_help"), valid.email, "E-mail is ok", "E-mailadres moet een @ en een punt bevatten")
        updateField(document.getElementById("m9_msg"), document.getElementById("m9_msg_help"), valid.msg, "Bericht is ok", "Bericht is verplicht (minstens 10 tekens)")

        updateSummaryAndStatus(true)
    })

})
