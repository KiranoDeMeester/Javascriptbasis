import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {

    let enterCount = 0, escapeCount = 0, spaceCount = 0, arrowCount = 0

    const keyDisplay = document.getElementById("m10_key_display")
    const keyValue = document.getElementById("m10_key_value")
    const keyCode = document.getElementById("m10_key_code")
    const modifiersList = document.getElementById("m10_modifiers")
    const enterElem = document.getElementById("m10_enter_count")
    const escapeElem = document.getElementById("m10_escape_count")
    const spaceElem = document.getElementById("m10_space_count")
    const arrowElem = document.getElementById("m10_arrow_count")
    const shortcutModeCheckbox = document.getElementById("m10_shortcut_mode")
    const shortcutStatus = document.getElementById("m10_shortcut_status")

    function updateDisplay(e) {
        keyDisplay.textContent = e.key
        keyValue.textContent = e.key
        keyCode.textContent = e.code

        const mods = []
        if(e.ctrlKey) mods.push("Ctrlingedrukt")
        if(e.altKey) mods.push("Altingedrukt")
        if(e.shiftKey) mods.push("Shiftingedrukt")
        modifiersList.innerHTML = mods.length ? mods.map(m => `<li>${m}</li>`).join("") : "<li>Geen modifier keys actief.</li>"
    }

    function updateCounters(e) {
        switch(e.key){
            case "Enter": enterCount++; enterElem.textContent = enterCount; break
            case "Escape": escapeCount++; escapeElem.textContent = escapeCount; break
            case " ": spaceCount++; spaceElem.textContent = spaceCount; break
            case "ArrowUp":
            case "ArrowDown":
            case "ArrowLeft":
            case "ArrowRight":
                arrowCount++; arrowElem.textContent = arrowCount; break
        }
    }

    function checkShortcuts(e) {
        if(!shortcutModeCheckbox.checked) {
            shortcutStatus.textContent = "Sneltoetsmodus staat uit."
            shortcutStatus.className = "alert alert-secondary mb-0"
            return
        }

        if(e.ctrlKey && e.key.toLowerCase() === "s") {
            e.preventDefault()
            shortcutStatus.textContent = "Sneltoets gedetecteerd: Ctrl + S (Opslaan)"
            shortcutStatus.className = "alert alert-success mb-0"
        } else if(e.ctrlKey && e.key.toLowerCase() === "p") {
            e.preventDefault()
            shortcutStatus.textContent = "Sneltoets gedetecteerd: Ctrl + P (Printen)"
            shortcutStatus.className = "alert alert-success mb-0"
        } else if(e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "n") {
            e.preventDefault()
            shortcutStatus.textContent = "Sneltoets gedetecteerd: Ctrl + Shift + N (Nieuw venster)"
            shortcutStatus.className = "alert alert-success mb-0"
        } else {
            shortcutStatus.textContent = "Geen bekende sneltoets."
            shortcutStatus.className = "alert alert-info mb-0"
        }
    }

    document.addEventListener("keydown", e => {
        updateDisplay(e)
        updateCounters(e)
        checkShortcuts(e)
    })

    document.getElementById("m10_reset_stats").addEventListener("click", () => {
        enterCount = escapeCount = spaceCount = arrowCount = 0
        enterElem.textContent = escapeElem.textContent = spaceElem.textContent = arrowElem.textContent = 0
    })

})
