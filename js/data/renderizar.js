import { TipoColor } from "./TipoColor.js";
import { Guardar } from "./script.js";
const btnBuscar = document.getElementById("btnBuscar");
const btnGuardar = document.getElementById("btnGuardar");
const sectionInfoPokemon = document.getElementById("infoPokemon");
const btnLeer = document.getElementById("btnLeer");
const contenedorCartas = document.getElementById("cartasQuemadas");

let pokemonActual = null;

btnLeer.addEventListener("click", () => {
  const pokemonesGuardados = Guardar.obtenerPokemones();
  if (pokemonesGuardados.length === 0) {
    contenedorCartas.innerHTML = "<p>No hay pokemones guardados.</p>";
    return;
  }
  mostrarCartasQuemadas(pokemonesGuardados.map((pokemon) => pokemon.name));
});

btnGuardar.addEventListener("click", () => {
  if (!pokemonActual) {
    sectionInfoPokemon.innerHTML =
      "<p>Busca un pókemon primero antes de guardar.</p>";
    return;
  }
  Guardar.guardarPokemones([pokemonActual]);
});

btnBuscar.addEventListener("click", async () => {
  const inputNombrePokemon = await document
    .getElementById("pokemonName")
    .value.toLowerCase();
  sectionInfoPokemon.innerHTML = "<p>Buscando pókemon....</p>";
  try {
    const respuesta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputNombrePokemon}`,
    );
    if (!respuesta.ok) {
      throw new Error("Pokemon no encontrado");
    }
    const datos = await respuesta.json();
    pokemonActual = datos;
    mostrarInfoPokemon(datos);
  } catch (error) {
    sectionInfoPokemon.innerHTML = "<p>Ocurrió un error al buscar </p>";
    console.error(error);
  }
});

function mostrarInfoPokemon(datos) {
  sectionInfoPokemon.innerHTML = `
    <div class="card">
    
            <img src="${datos.sprites.other["official-artwork"].front_default}" alt="${datos.name}">
            <div class="info">
            <main id="contenedor" >
            <h1>Name: ${datos.name}</h1>
            <h2>Type: ${datos.types[0].type.name}</h2>
            <h3> Height: ${datos.height}</h3>
            <h4>Id: ${datos.id}</h4>
        </main>
        </div>
        </div>
    
    `;
  const card = sectionInfoPokemon.querySelector(".card");
  card.style.backgroundColor = TipoColor.obtenerColor(datos.types[0].type.name);
}

async function mostrarCartasQuemadas(cartas) {
  contenedorCartas.innerHTML = "<p>Cargando cartas...</p>";
  contenedorCartas.innerHTML = "";

  for (let nombre of cartas) {
    try {
      const respuesta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`,
      );
      if (!respuesta.ok) throw new Error("Pokemon no encontrado");
      const datos = await respuesta.json();

      // Crear carta
      const carta = document.createElement("div");
      carta.classList.add("card");

      carta.innerHTML = `
                <img src="${datos.sprites.other["official-artwork"].front_default}" alt="${datos.name}">
                <div class="info">
                    <h1>Name: ${datos.name}</h1>
                    <h2>Type: ${datos.types[0].type.name}</h2>
                    <h3>Height: ${datos.height}</h3>
                    <h4>Id: ${datos.id}</h4>
                </div>
            `;
      carta.style.background = TipoColor.obtenerColor(datos.types[0].type.name);

      contenedorCartas.appendChild(carta);
    } catch (error) {
      console.error(error);
    }
  }
}
