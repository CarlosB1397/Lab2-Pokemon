const btnBuscar = document.getElementById('btnBuscar');
const sectionInfoPokemon =document.getElementById('infoPokemon');
const cuerpo = document.body
const btnLeer = document.getElementById('btnLeer');
const contenedorCartas = document.getElementById('infoPokemon');
const cartasQuemadas = [
    "pikachu",
    "charmander",
    "bulbasaur",
    "squirtle",
    "eevee",
    "jigglypuff"
];

btnLeer.addEventListener('click', () => {
    mostrarCartasQuemadas(cartasQuemadas);
});

btnBuscar.addEventListener('click', async () => {
    const inputNombrePokemon = await document.getElementById('pokemonName').value.toLowerCase();
    sectionInfoPokemon.innerHTML = '<p>Buscando pókemon....</p>';
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputNombrePokemon}`);
        if (!respuesta.ok) {
            throw new Error('Pokemon no encontrado');
        }
        const datos = await respuesta.json();
        mostrarInfoPokemon(datos);
        cambiarColores(datos);
    } catch (error) {
        sectionInfoPokemon.innerHTML = '<p>Ocurrió un error al buscar </p>';
        console.error(error);
    }
});

function mostrarInfoPokemon(datos) {
    sectionInfoPokemon.innerHTML = `
    <div class="card">
    
            <img src="${datos.sprites.other['official-artwork'].front_default}" alt="${datos.name}">
            <div class="info">
            <main id="contenedor" >
            <h1>Name: ${datos.name}</h1>
            <h2>Type: ${ datos.types[0].type.name}</h2>
            <h3> Height: ${datos.height}</h3>
            <h4>Id: ${datos.id}</h4>
        </main>
        </div>
        </div>
    
    `;
}

function cambiarColores(datos) {

    if (datos.types[0].type.name === 'electric') {
        cuerpo.style.backgroundColor = "#d0db34";

    }
    else
        if (datos.types[0].type.name === 'fire') {
            cuerpo.style.backgroundColor = "#e9810b";
        }
        else
            if (datos.types[0].type.name === 'water') {
                cuerpo.style.backgroundColor = "#339dc7";
            }

};

async function mostrarCartasQuemadas(cartas) {
    contenedorCartas.innerHTML = '<p>Cargando cartas...</p>';
    contenedorCartas.innerHTML = '';

    for (let nombre of cartas) {
        try {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
            if (!respuesta.ok) throw new Error('Pokemon no encontrado');
            const datos = await respuesta.json();

            // Crear carta
            const carta = document.createElement('div');
            carta.classList.add('card');

            carta.innerHTML = `
                <img src="${datos.sprites.other['official-artwork'].front_default}" alt="${datos.name}">
                <div class="info">
                    <h1>Name: ${datos.name}</h1>
                    <h2>Type: ${datos.types[0].type.name}</h2>
                    <h3>Height: ${datos.height}</h3>
                    <h4>Id: ${datos.id}</h4>
                </div>
            `;

            contenedorCartas.appendChild(carta);

        } catch (error) {
            console.error(error);
        }
    }
}