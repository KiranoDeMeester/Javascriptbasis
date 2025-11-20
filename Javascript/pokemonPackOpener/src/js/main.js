const POKEMON_MAX = 898;
const MAX_ROWS = 5;

// Type kleuren
const typeColors = {
    normal:"#A8A77A", fire:"#EE8130", water:"#6390F0", electric:"#F7D02C",
    grass:"#7AC74C", ice:"#96D9D6", fighting:"#C22E28", poison:"#A33EA1",
    ground:"#E2BF65", flying:"#A98FF3", psychic:"#F95587", bug:"#A6B91A",
    rock:"#B6A136", ghost:"#735797", dragon:"#6F35FC", dark:"#705746",
    steel:"#B7B7CE", fairy:"#D685AD"
};

// Genereer unieke random IDs
function rndIds(count=5){
    const ids = new Set();
    while(ids.size < count) ids.add(Math.floor(Math.random()*POKEMON_MAX)+1);
    return Array.from(ids);
}

// Fetch Pokémon via ID
async function fetchPokemon(id){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if(!res.ok) throw new Error(`Pokémon ${id} kon niet geladen worden`);
    return res.json();
}

// Fetch meerdere Pokémon
async function getRandomPokemon(count=5){
    const ids = rndIds(count);
    return Promise.all(ids.map(id=>fetchPokemon(id)));
}

// Trigger confetti
function triggerConfetti(){
    const container = document.body;
    for(let i=0;i<30;i++){
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random()*window.innerWidth+'px';
        confetti.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        container.appendChild(confetti);
        confetti.addEventListener('animationend',()=>confetti.remove());
    }
}

// Knop pop animatie
function triggerButtonPop(){
    const button = document.getElementById('pack-closed');
    button.classList.add('pop');
    button.addEventListener('animationend',()=>button.classList.remove('pop'),{once:true});
}

// Render pack met stats, hoogte, gewicht en URL
async function renderPack(pokemonList){
    const packsWrapper = document.getElementById('packs-wrapper');
    const packRow = document.createElement('div');
    packRow.classList.add('pack-row');

    const reversed = [...pokemonList].reverse();

    reversed.forEach((p,index)=>{
        const types = p.types.map(t=>t.type.name).join(' / ');
        const sprite = p.sprites.front_default || (p.sprites.other['official-artwork']?.front_default) || '';
        const stats = p.stats.map(s=>`${s.stat.name}: ${s.base_stat}`).join(' · ');
        const url = `https://pokeapi.co/api/v2/pokemon/${p.id}`;
        const primaryType = p.types[0].type.name;
        const headerColor = typeColors[primaryType] || '#0d6efd';
        const textColor = 'white';
        const bgColor = '#222';

        const card = document.createElement('div');
        card.classList.add('pokemon-card','card','shadow-sm');
        card.style.borderColor = headerColor;

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">Pokémon kaart</div>
                <div class="card-back d-flex flex-column align-items-center" style="color:${textColor}; background-color:${bgColor}">
                    <div class="card-header" style="background-color:${headerColor}; color:${textColor}">
                        ${p.name.charAt(0).toUpperCase()+p.name.slice(1)}
                    </div>
                    <img src="${sprite}" class="card-img-top">
                    <p class="small mb-1"><strong>#${String(p.id).padStart(3,'0')}</strong></p>
                    <p class="small mb-1"><strong>Type:</strong> ${types}</p>
                    <p class="small mb-1"><strong>Hoogte:</strong> ${(p.height/10).toFixed(1)} m</p>
                    <p class="small mb-1"><strong>Gewicht:</strong> ${(p.weight/10).toFixed(1)} kg</p>
                    <p class="small mb-0"><strong>Stats:</strong> ${stats}</p>
                </div>
            </div>
        `;

        // Klik opent Pokémon URL
        card.addEventListener('click',()=>window.open(url,'_blank'));

        packRow.appendChild(card);
        setTimeout(()=>card.classList.add('flipped'),300*index);
    });

    packsWrapper.prepend(packRow);

    while(packsWrapper.children.length>MAX_ROWS){
        packsWrapper.removeChild(packsWrapper.lastChild);
    }
}

// Open pack
async function openPack(count=5){
    triggerConfetti();
    triggerButtonPop();

    const packClosed = document.getElementById('pack-closed');
    const packOpen = document.getElementById('pack-open');

    packClosed.classList.add('d-none');
    packOpen.classList.remove('d-none');
    packOpen.innerText = '✨ Opening pack...';

    await new Promise(r=>setTimeout(r,800));

    const pokemon = await getRandomPokemon(count);

    packOpen.innerText='🎉 Revealing cards...';
    await new Promise(r=>setTimeout(r,600));

    renderPack(pokemon);

    packOpen.classList.add('d-none');
    packClosed.classList.remove('d-none');
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('pack-closed').addEventListener('click',()=>openPack(5));
});
