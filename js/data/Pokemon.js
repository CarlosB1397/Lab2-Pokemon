export class Pokemon {

    constructor(nombre, id, tipo, altura) {
        this.nombre = nombre;
        this.id = id;
        this.tipo = tipo;
        this.altura = altura;
    }

    getNombre() {
        return this.nombre;
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

