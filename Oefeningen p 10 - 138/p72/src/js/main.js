// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// Eigen JS
document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById('rb_box')

    box.addEventListener("mouseover", () => {
        box.textContent = "Hallo"
        box.style.setProperty('background-color', 'lightgreen', 'important')
    })

    box.addEventListener("mouseleave", () => {
        box.textContent = "Kom terug"
        box.style.removeProperty('background-color')
    })

    box.addEventListener("click", () => {
        box.textContent = "Je klikt!"
        box.style.setProperty('border', '5px solid black', 'important')
    })

    box.addEventListener("dblclick", () => {
        box.textContent = "Dubbelklik wow!!"
        box.style.setProperty('border', '5px solid red', 'important')
    })
})
