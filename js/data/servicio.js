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
            pokemones += 
            `
                <article class="pokemon-card">
                    <img src="${pokemonInfo.sprites.other['official-artwork'].front_default}" alt="${pokemonInfo.name}">
                    <h2>${pokemonInfo.name}</h2>
                    <p>Tipo: ${pokemonInfo.types[0].type.name}</p>
                    <p>Altura: ${pokemonInfo.height}</p>
                    <p>ID: ${pokemonInfo.id}</p>
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