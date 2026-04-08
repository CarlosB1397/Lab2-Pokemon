export class Pokemon {

    constructor(nombre, id, tipo, altura, imagen) {
        this.nombre = nombre;
        this.id = id;
        this.tipo = tipo;
        this.altura = altura;
        this.imagen = imagen;
    }

    static crearPokemon(datos) { //Método para crear un pokemon con sus atributos y realizar limpieza de datos
        return new Pokemon(
            datos.name,
            datos.id,
            datos.types[0].type.name,
            datos.height,
            datos.sprites.other['official-artwork'].front_default);
    }

    getNombre() {
        return this.nombre;
    }

    getImagen() {
        return this.imagen;
    }

    getId() {
        return this.id;
    }

    getTipo() {
        return this.tipo;
    }

    getAltura() {
        return this.altura;
    }

    getInformacion() {
        return `Nombre:${this.nombre}
     Id:${this.id}
     Tipo:${this.tipo}
     Altura:${this.altura}`;
    }

}//fin clase

