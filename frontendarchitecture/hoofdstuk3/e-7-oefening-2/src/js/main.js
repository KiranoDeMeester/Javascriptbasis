// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

class NotificationCounter{
    static instance;

    constructor(){
        if(NotificationCounter.instance){
            return NotificationCounter.instance;
        }
        this.count = 0;
        NotificationCounter.instance = this;
    }

    setCount(value){
        this.count += value;
    }

    getCount(){
        return this.count;
    }

    clear(){
        this.count = 0;
    }

    render(){
        const counter = document.querySelector("#notif_badge");
        counter.textContent = this.getCount();
    }
}

const notificationCounter = new NotificationCounter();

const moduleA = {
    sendA(value){
        notificationCounter.setCount(value);
        notificationCounter.render();
    }
};
const moduleB = {
    sendB(value){
        notificationCounter.setCount(value);
        notificationCounter.render();
    }
};

document
    .querySelector("#notif_btn_a")
    .addEventListener("click", () => {
        moduleA.sendA(1);
    });

document
    .querySelector("#notif_btn_b")
    .addEventListener("click", () => {
        moduleB.sendB(1);
    });

document
    .querySelector("#notif_btn_reset")
    .addEventListener("click", () => {
        notificationCounter.clear();
        notificationCounter.render();
    });
