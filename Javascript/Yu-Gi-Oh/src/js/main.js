const API_ENDPOINT = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const MAX_ROWS = 5;

// Fetch random cards
async function fetchRandomCards(count = 5) {
    const res = await fetch(API_ENDPOINT);
    const data = await res.json();
    const allCards = data.data;

    const selected = new Set();
    while (selected.size < count) {
        const rndIndex = Math.floor(Math.random() * allCards.length);
        selected.add(allCards[rndIndex]);
    }
    return Array.from(selected);
}

// Render cards
function renderPack(cards) {
    const wrapper = document.getElementById("packs-wrapper");
    const row = document.createElement("div");
    row.classList.add("pack-row");

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector("img");

    cards.forEach(c => {
        const imgUrl = c.card_images[0].image_url;

        const card = document.createElement("div");
        card.classList.add("yu-card");
        card.innerHTML = `<img src="${imgUrl}" alt="${c.name}">`;

        // Click opens lightbox
        card.addEventListener("click", () => {
            lightboxImg.src = imgUrl;
            lightbox.style.display = "flex";
        });

        row.appendChild(card);
    });

    wrapper.prepend(row);

    while (wrapper.children.length > MAX_ROWS) {
        wrapper.removeChild(wrapper.lastChild);
    }
}

// Close lightbox on click outside image
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) lightbox.style.display = "none";
    });

    const packClosed = document.getElementById("pack-closed");
    const packOpen = document.getElementById("pack-open");

    packClosed.addEventListener("click", async () => {
        packClosed.style.display = 'none';
        packOpen.style.display = 'block';
        packOpen.innerText = '✨ Opening pack...';

        await new Promise(r => setTimeout(r, 600));
        const cards = await fetchRandomCards(5);

        packOpen.innerText = '🎉 Revealing cards...';
        await new Promise(r => setTimeout(r, 400));

        renderPack(cards);

        packOpen.style.display = 'none';
        packClosed.style.display = 'block';
    });
});
