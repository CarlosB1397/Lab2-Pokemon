
export class TipoColor {

    static obtenerColor(tipoPokemon) {

        if (tipoPokemon === "water") {
            return "#2601f5";
        } else if (tipoPokemon === "fire") {
            return "#ff0b0b";
        } else if (tipoPokemon === "electric") {
            return "#f5dd01";
        } else if (tipoPokemon== "grass"){
            return "#01f501";
        } else {
            return "#ffffff"; // El color por defecto
        }
    } //método tipo de color 
}//Fin de la clase 