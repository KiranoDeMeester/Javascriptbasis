// =========================
// core/eventBus.js
// =========================

export const CoreEventBus = {
    listeners: {},

    subscribe(eventName, handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(handler);
    },

    publish(eventName, payload) {
        const handlers = this.listeners[eventName] || [];
        handlers.forEach(fn => fn(payload));
    }
};
