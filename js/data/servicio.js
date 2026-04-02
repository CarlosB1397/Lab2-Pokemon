const sugerencias = document.getElementById('sugerencias');
let pokemones = '';

fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(res => {
        if (!res.ok)
            throw new Error('Error al cargar pokemones');
        return res.json();
    })
    .then(data => {
        data.results.forEach(pokemon => {
            sugerencias.innerHTML =
            `
                <p>${pokemon.name}</p>
            `;
        });
        
        console.log(data.results);
    })
    .catch(err => console.error(err));