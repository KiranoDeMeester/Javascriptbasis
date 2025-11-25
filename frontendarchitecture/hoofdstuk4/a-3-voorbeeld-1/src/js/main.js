// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
/*
* Hier zie je:
•	De UI kent EventBus, maar zender en ontvanger kennen elkaar niet.
•	Je kan meerdere observers op "MESSAGE" abonneren zonder de publisher te veranderen.
*/
// Eenvoudige EventBus implementatie
const EventBus = {
    listeners: {},

    subscribe(eventName, handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(handler);
    },

    publish(eventName, data) {
        const handlers = this.listeners[eventName] || [];
        handlers.forEach(fn => fn(data));
    }
};

// Observer: luistert naar "MESSAGE"
EventBus.subscribe("MESSAGE", function (payload) {
    const list = document.querySelector("#ev_messages_list");
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `[${new Date().toLocaleTimeString()}] ${payload.text}`;
    list.appendChild(li);
});

// Publisher: stuurt MESSAGE event
document
    .querySelector("#ev_btn_send")
    .addEventListener("click", () => {
        const input = document.querySelector("#ev_message");
        const text = input.value.trim();
        if (!text) return;

        EventBus.publish("MESSAGE", { text });
        input.value = "";
    });
