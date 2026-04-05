const btnBuscar = document.getElementById('btnBuscar');

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
        <div>
            
            <img src="${datos.sprites.other['official-artwork'].front_default}" alt="${datos.name}">
           <main id="contenedor"
            <h2>Name: ${datos.name}</h2>
            <p>Type: ${ datos.types[0].type.name}</p>
            <p>Height: ${datos.height}</p>
            <p>Id: ${datos.id}</p>
        </main>
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