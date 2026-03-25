export class Pokemon{
    
    constructor(nombre,id,tipo,altura){
        this.nombre=nombre;
        this.id=id;
        this.tipo=tipo;
        this.altura=altura;
    }

    obtenerNombre(){
        return `Nombre Pokémon: ${this.nombre}`;
    }

    obtenerId(){
        return `Id Pokémon: ${this.id}`;
    }

    obtenerTipo(){
        return `Tipo Pokémon: ${this.tipo}`;
    }

    obtenerAltura(){
        return `Altura Pokémon: ${this.altura}`;
    }

}//fin clase

