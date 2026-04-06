const inputNombrePokemon = document.getElementById('pokemonName');
const btnBuscar = document.getElementById('btnBuscar');
const sectionInfoPokemon = document.getElementById('infoPokemon');

btnBuscar.addEventListener('click', () => {
    if (inputNombrePokemon.value !== '') {
        cargaAnimacion();
    }
});

inputNombrePokemon.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && inputNombrePokemon.value !== '') {
        cargaAnimacion();
        document.getElementById('btnBuscar').click();
        console.log(inputNombrePokemon.value.toLowerCase());
    }
});

function cargaAnimacion() {
    sectionInfoPokemon.innerHTML = `
        <div class = "cargando">
            <div class = "spinner"></div>
            <p>Buscando en la pokedex...</p>
        </div>
    `;
}