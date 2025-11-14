// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS

//eigen js
(() => {
    const b = document.body;
    let l = 3, s = 0;

    const spawn = () => {
        if (l <= 0) return;
        const dog = document.createElement("div");
        dog.className = "dog";
        dog.style.left = Math.random() * (innerWidth - 40) + "px";
        dog.style.top = "-50px";
        b.appendChild(dog);

        let y = 0;
        const fall = setInterval(() => {
            y += 2 + Math.floor(s / 10);
            dog.style.top = y + "px";

            if (y > innerHeight - 80) {               // missed
                dog.remove(); clearInterval(fall);
                l--; document.getElementById("l").textContent = l;
                if (l <= 0) gameOver();
            }
        }, 20);

        dog.onclick = () => {                       // zapped
            s++; document.getElementById("s").textContent = s;
            dog.remove(); clearInterval(fall);
            if (s === 60) ultraNyan();
        };
    };

    const gameOver = () => {
        b.innerHTML = `<h1 style="margin-top:40vh">Thou hast failed, ye flea-bitten knave!<br><small>Refresh to restore thy dignity.</small></h1>`;
    };

    const ultraNyan = () => {
        b.innerHTML = `<h1 style="margin-top:40vh;color:#ff0">🌈 ULTRA-NYAN UNLEASHED 🌈<br><small>Refresh when your retinas recover.</small></h1>`;
    };

    setInterval(spawn, 600);
})();