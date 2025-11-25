// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// SessionStore singleton
class SessionStore {
    static instance;

    constructor() {
        if (SessionStore.instance) {
            return SessionStore.instance;
        }

        this.gebruiker = "-";           // Default username
        this.status = "Niet ingelogd";  // Default status
        this.logIn = false;             // Login state

        SessionStore.instance = this;
    }

    setGebruiker(value) {
        this.gebruiker = value;
    }

    setStatus(value) {
        this.status = value;
    }

    setLogIn(value) {
        this.logIn = value;
    }

    getGebruiker() {
        return this.gebruiker;
    }

    getStatus() {
        return this.status;
    }

    isLoggedIn() {
        return this.logIn;
    }

    showSession() {
        return `Gebruiker: ${this.gebruiker} - Status: ${this.status}`;
    }

    render() {
        // Alleen UI updaten
        document.querySelector("#sess_out_user").textContent = this.gebruiker;
        document.querySelector("#sess_out_status").textContent = this.status;
    }
}

const sessStore = new SessionStore();

// Login actie
const sessLogin = {
    login() {
        const naamInput = document.querySelector("#sess_username").value.trim();

        if (sessStore.isLoggedIn()) {
            sessStore.setStatus("U bent al ingelogd");
        } else if (!naamInput) {
            sessStore.setLogIn(false);
            sessStore.setStatus("Voer een gebruikersnaam in");
            sessStore.setGebruiker("-");
        } else {
            sessStore.setLogIn(true);
            sessStore.setGebruiker(naamInput);
            sessStore.setStatus("Ingelogd");
            // Optioneel input leegmaken
            // document.querySelector("#sess_username").value = "";
        }

        sessStore.render();
    }
}

// Logout actie
const sessLogout = {
    logout() {
        if (!sessStore.isLoggedIn() || sessStore.getGebruiker() === "-") {
            sessStore.setStatus("Er is geen gebruiker ingelogd");
        } else {
            sessStore.setLogIn(false);
            sessStore.setStatus("U bent uitgelogd");
            sessStore.setGebruiker("-");
        }

        sessStore.render();
    }
}

// Session info helper
const SessionInfo = {
    showSession() {
        return sessStore.showSession();
    }
}

// Event listeners
document.querySelector("#sess_btn_login")
    .addEventListener("click", () => sessLogin.login());

document.querySelector("#sess_btn_logout")
    .addEventListener("click", () => sessLogout.logout());

// Refresh button: show session info below the button
document.querySelector("#sess_btn_refresh")
    .addEventListener("click", (e) => {
        let infoDiv = document.querySelector("#sess_info_output");
        if (!infoDiv) {
            infoDiv = document.createElement("div");
            infoDiv.id = "sess_info_output";
            infoDiv.style.marginTop = "10px";
            infoDiv.style.padding = "5px 10px";
            infoDiv.style.border = "1px solid #ccc";
            infoDiv.style.display = "inline-block";

            // Insert immediately after the refresh button
            e.target.insertAdjacentElement("afterend", infoDiv);
        }

        infoDiv.textContent = SessionInfo.showSession();
    });
