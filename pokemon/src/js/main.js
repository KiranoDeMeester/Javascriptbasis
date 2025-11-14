import '../scss/styles.scss'

async function loadPokemon() {
    const list = document.querySelector(".row.g-4");
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        if (!res.ok) throw new Error("Netwerk fout");

        const data = await res.json();
        const items = data.results;

        const detailed = await Promise.all(
            items.map(async (p) => {
                const resDetail = await fetch(p.url);
                return resDetail.json();
            })
        );

        list.innerHTML = detailed.map(p => {
            const types = p.types.map(t => t.type.name).join(" / ");
            const height = (p.height / 10).toFixed(1) + " m";
            const gewicht = (p.weight / 10).toFixed(1) + " kg";

            return `
            <div class="col">
                <div class="card shadow-sm h-100 border-0">
                    <div class="card-header bg-primary text-white text-center">
                        ${p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                    </div>
                    <img
                        src="${p.sprites.front_default}"
                        class="card-img-top p-3"
                        alt="${p.name}"
                    >
                    <div class="card-body">
                        <h5 class="card-title text-center">#${String(p.id).padStart(3, '0')}</h5>
                        <ul class="list-group small">
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Type</span><span>${types}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Hoogte</span><span>${height}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Gewicht</span><span>${gewicht}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`;
        }).join("");
    } catch (err) {
        alert("JSON kon niet geladen worden");
        console.error(err);
    }
}

document.addEventListener("DOMContentLoaded", loadPokemon);
