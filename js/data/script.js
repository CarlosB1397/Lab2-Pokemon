export class Guardar {
  static KEY = "mis_pokemon";
  static guardarPokemones(pokemones) {
    localStorage.setItem(this.KEY, JSON.stringify(pokemones));
    alert("Pokemon guardado correctamente en el Pokedex");
    if(localStorage.getItem(this.KEY).length > 5){
    alert("No puedes guardar más de 6 pokemones en el Pokedex");
    }//validamos que no se guarden más de 6 pokemones, si se intenta guardar más de 6 pokemones se muestra una alerta
    for(let i = 0; i < pokemones.length; i++){
       for(let j = i + 1; j < pokemones.length; j++){
         if(pokemones[i].name === pokemones[j].name){
           alert("No puedes guardar el mismo pokemon más de una vez");
           pokemones.splice(j, 1);
         }//fin if
       }//fin for j
    }//validamos que no se guarden pokemones repetidos, si se encuentra un pokemon repetido se elimina del array
  }//fin guardarPokemones

  static obtenerPokemones() {
    const datos= localStorage.getItem(this.KEY);
    return datos ? JSON.parse(datos) : [];
    //si los datos existen los parseamos, si no existe devolvemos un array vacio
  };

}//fin clase

