const sugerencias = document.getElementById('sugerencias');
let pokemones = '<h1>Pokemones sugeridos</h1>';

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
                <img src="${pokemonInfo.sprites.other['official-artwork'].front_default}" alt="${pokemonInfo.name}">
                <h2>Name: ${pokemonInfo.name}</h2>
                <h2>Type: ${ pokemonInfo.types[0].type.name}</h2>
                <h3> Height: ${pokemonInfo.height}</h3>
                <h4>Id: ${pokemonInfo.id}</h4>
            `;
        }
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