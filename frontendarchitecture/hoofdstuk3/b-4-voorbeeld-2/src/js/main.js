// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
* Hier zie je:
•	Zowel ModuleA als ModuleB gebruiken dezelfde LoggerSingleton.
•	Alle logberichten komen in één gedeeld logboek terecht.

*/
class LoggerSingleton {
    static instance;

    constructor() {
        if (LoggerSingleton.instance) {
            return LoggerSingleton.instance;
        }
        this.logs = [];
        LoggerSingleton.instance = this;
    }

    log(source, message) {
        const entry = {
            time: new Date().toLocaleTimeString(),
            source,
            message
        };
        this.logs.push(entry);
        this.render();
    }

    clear() {
        this.logs = [];
        this.render();
    }

    render() {
        const list = document.querySelector("#log_list");
        if (!list) return;

        list.innerHTML = this.logs
            .map(log => `
                <li class="list-group-item d-flex justify-content-between">
                  <span>[${log.time}] ${log.source}</span>
                  <span>${log.message}</span>
                </li>
            `)
            .join("");
    }
}

// één centrale logger
const AppLogger = new LoggerSingleton();

// Stel je voor dat dit twee verschillende modules in aparte files zijn:
const ModuleA = {
    doSomething() {
        AppLogger.log("ModuleA", "Actie uitgevoerd");
    }
};

const ModuleB = {
    doSomethingElse() {
        AppLogger.log("ModuleB", "Andere actie uitgevoerd");
    }
};

// events voor buttons
document
    .querySelector("#log_btn_modA")
    .addEventListener("click", () => ModuleA.doSomething());

document
    .querySelector("#log_btn_modB")
    .addEventListener("click", () => ModuleB.doSomethingElse());

document
    .querySelector("#log_btn_clear")
    .addEventListener("click", () => AppLogger.clear());
