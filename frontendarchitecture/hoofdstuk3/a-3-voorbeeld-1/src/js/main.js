// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
* Belangrijk:
•	new SettingsSingleton() geeft altijd dezelfde instantie terug.
•	Alle code die new SettingsSingleton() aanroept, praat met dezelfde language en theme.
*/
class SettingsSingleton {
    static instance;

    constructor() {
        if (SettingsSingleton.instance) {
            return SettingsSingleton.instance;
        }

        // default instellingen
        this.language = "nl";
        this.theme = "light";

        SettingsSingleton.instance = this;
    }

    setLanguage(lang) {
        this.language = lang;
    }

    setTheme(theme) {
        this.theme = theme;
    }

    getLanguage() {
        return this.language;
    }

    getTheme() {
        return this.theme;
    }
}

// één keer aanmaken
const appSettings = new SettingsSingleton();

// UI-logica ernaast
function saveSettingsFromUI() {
    const langSelect = document.querySelector("#set_lang");
    const themeSelect = document.querySelector("#set_theme");

    appSettings.setLanguage(langSelect.value);
    appSettings.setTheme(themeSelect.value);

    applyThemePreview();
}

function showSettingsInUI() {
    document.querySelector("#set_current_lang").textContent = appSettings.getLanguage();
    document.querySelector("#set_current_theme").textContent = appSettings.getTheme();
}

function applyThemePreview() {
    const preview = document.querySelector("#set_preview");
    const theme = appSettings.getTheme();

    preview.classList.remove("bg-dark", "text-white", "bg-light");
    if (theme === "dark") {
        preview.classList.add("bg-dark", "text-white");
    } else {
        preview.classList.add("bg-light");
    }
}

// event listeners
document
    .querySelector("#set_btn_save")
    .addEventListener("click", saveSettingsFromUI);

document
    .querySelector("#set_btn_show")
    .addEventListener("click", () => {
        showSettingsInUI();
        applyThemePreview();
    });
