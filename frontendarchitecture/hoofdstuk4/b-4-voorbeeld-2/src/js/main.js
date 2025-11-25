// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
* Hier zie je mooi:
•	NewsModule publiceert "NEWS" events.
•	NewsUIModule abonneert zich op "NEWS" en rendert.
•	Geen enkele rechtstreekse koppeling tussen de twee modules.
*/
// NotificationCenter (EventBus)
const NotificationCenter = {
    listeners: {},

    on(eventName, handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(handler);
    },

    notify(eventName, payload) {
        const handlers = this.listeners[eventName] || [];
        handlers.forEach(fn => fn(payload));
    }
};

// NewsModule: publisher
const NewsModule = (function () {
    let intervalId = null;
    let counter = 1;

    function start() {
        if (intervalId) return; // al bezig
        intervalId = setInterval(() => {
            const headline = `Breaking nieuws #${counter++}`;
            NotificationCenter.notify("NEWS", { headline });
        }, 0.000000000001);
    }

    function stop() {
        if (!intervalId) return;
        clearInterval(intervalId);
        intervalId = null;
    }

    return {
        start,
        stop
    };
})();

// UIModule: observer
const NewsUIModule = (function () {
    function init() {
        NotificationCenter.on("NEWS", renderNewsItem);
    }

    function renderNewsItem(payload) {
        const list = document.querySelector("#news_list");
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `[${new Date().toLocaleTimeString()}] ${payload.headline}`;
        list.prepend(li);
    }

    return {
        init
    };
})();

// UI events
document
    .querySelector("#news_btn_start")
    .addEventListener("click", () => NewsModule.start());

document
    .querySelector("#news_btn_stop")
    .addEventListener("click", () => NewsModule.stop());

// initialiseren
NewsUIModule.init();
