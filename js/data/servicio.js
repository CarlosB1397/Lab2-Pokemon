const sugerencias = document.getElementById('sugerencias');
let pokemones = '';

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
                <p>Nombre: ${pokemonInfo.name}</p>
                <p>height: ${pokemonInfo.height}</p>
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