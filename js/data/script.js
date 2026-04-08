export class Guardar {
  static KEY = "mis_pokemon";
  static guardarPokemones(pokemones) {
    const pokemonesActuales = this.obtenerPokemones();
    for (const pokemon of pokemones) {
      if (pokemonesActuales.some((p) => p.name === pokemon.name)) {
        alert(`El Pokemon ${pokemon.name} ya esta guardado`);
        return;
      } //si el pokemon ya esta guardado, mostramos una alerta y salimos de la funcion
    } //si el pokemon no esta guardado, lo agregamos al array de pokemones actuales
    const todos = [...pokemonesActuales, ...pokemones];
    if (todos.length > 6) {
      alert("No puedes guardar más de 6 pokemones en el Pokedex");
    } else {
      localStorage.setItem(this.KEY, JSON.stringify(todos));
      alert("Pokemon guardado correctamente en el Pokedex");
    } //si el numero de pokemones guardados es mayor a 6, mostramos una alerta
  } //fin guardarPokemones

  static obtenerPokemones() {
    const datos = localStorage.getItem(this.KEY);
    return datos ? JSON.parse(datos) : [];
    //si los datos existen los parseamos, si no existe devolvemos un array vacio
  }
} //fin clase
