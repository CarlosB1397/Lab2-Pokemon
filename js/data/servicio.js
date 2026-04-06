import { Pokemon } from "./Pokemon.js";

const sugerencias = document.getElementById('sugerencias');
let pokemones = '<h1>Pokemones sugeridos</h1><div class="pokemon-grid">';

fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(res => {
        if (!res.ok)
            throw new Error('Error al cargar pokemones');
        return res.json();
    })
    .then(async data => {
        for (const pokemon of data.results) {
            const pokemonInfo = await obtenerInfo(pokemon.name);
            let pokemonInstance = Pokemon.crearPokemon(pokemonInfo);
            pokemones += 
            `
                <article class="pokemon-card">
                    <img src="${pokemonInstance.getImagen()}" alt="${pokemonInfo.name}">
                    <h2>${pokemonInstance.nombre}</h2>
                    <p>Tipo: ${pokemonInstance.getTipo()}</p>
                    <p>Altura: ${pokemonInstance.getAltura()}</p>
                    <p>ID: ${pokemonInstance.getId()}</p>
                </article>
            `;
        }
        pokemones += '</div>';
        sugerencias.innerHTML = pokemones;
    })
    .catch(err => console.error(err));

const obtenerInfo = async (pokemon) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        if(!res.ok)
            throw new Error('error al encontrar pokemones');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}