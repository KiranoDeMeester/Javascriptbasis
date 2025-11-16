import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {

    class User {
        constructor(name, age) {
            this.name = name
            this.age = age
            this.role = 'User'
        }
        getLabel() {
            return `${this.name} (${this.age}) is een gewone gebruiker.`
        }
    }

    class Admin extends User {
        constructor(name, age) {
            super(name, age)
            this.role = 'Admin'
        }
        getLabel() {
            return `${this.name} (${this.age}) is administrator.`
        }
    }

    const accounts = []
    const nameInput = document.getElementById('m12_name')
    const ageInput = document.getElementById('m12_age')
    const roleSelect = document.getElementById('m12_role')
    const addBtn = document.getElementById('m12_add')
    const totalCountEl = document.getElementById('m12_total_count')
    const userCountEl = document.getElementById('m12_user_count')
    const adminCountEl = document.getElementById('m12_admin_count')
    const listEl = document.getElementById('m12_list')

    function updateCounts() {
        totalCountEl.textContent = accounts.length
        userCountEl.textContent = accounts.filter(a => a.role === 'User').length
        adminCountEl.textContent = accounts.filter(a => a.role === 'Admin').length
    }

    function renderAccounts() {
        if (!accounts.length) {
            listEl.innerHTML = `<div class="col-12"><p class="text-muted mb-0">Nog geen accounts aangemaakt, vul het formulier in en klik op "Maak account".</p></div>`
            updateCounts()
            return
        }

        listEl.innerHTML = accounts.map(acc => `
      <div class="col-md-6 col-lg-4">
        <div class="card shadow-sm h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <span>${acc.name}</span>
            <span class="badge ${acc.role === 'Admin' ? 'bg-danger' : 'bg-secondary'}">${acc.role}</span>
          </div>
          <div class="card-body">
            <p>Leeftijd: ${acc.age}</p>
            <p class="text-muted small">${acc.getLabel()}</p>
          </div>
        </div>
      </div>
    `).join('')
        updateCounts()
    }

    addBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const name = nameInput.value.trim()
        const age = parseInt(ageInput.value)
        const role = roleSelect.value

        if (!name || !age || age <= 0) {
            alert('Vul een geldige naam en leeftijd in.')
            return
        }

        const account = role === 'admin' ? new Admin(name, age) : new User(name, age)
        accounts.push(account)
        renderAccounts()

        nameInput.value = ''
        ageInput.value = ''
        roleSelect.value = 'user'
        nameInput.focus()
    })


})
