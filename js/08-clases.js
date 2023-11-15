// nombre, tipo, peso, altura, evolucion, ataques, pokedex, fuerza
// fuerza max 15
class Pokemon{
    #tipo; //propiedad privada
    //el primer metodo que se ejecuta automaticamente al crear un objeto
    constructor(nombreParam, tipo, peso, altura, evolucion, ataques, numPokedex, fuerza){
        this.nombre = nombreParam;
        this.#tipo = tipo;
        this.peso = peso;
        this.altura = altura;
        this.evolucion = evolucion;
        this.ataques = ataques;
        this.numPokedex = numPokedex;
        this.fuerza = fuerza;
    }
    //propiedades computadas get y set
    get tipo(){
        return this.#tipo;
    }

    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }

    //metodos
};
//crear o instanciar un objeto
const charmander = new Pokemon('Charmander', 'fuego', 15, 1.20,['charmeleon', 'charizard'], ['blaze','ascuas','lanzallamas'], 4, 4);

console.log(charmander)
document.write(`<h2>Pokemon: ${charmander.nombre}</h2>`);
document.write(`<p>Tipo: ${charmander.tipo}</p>`);

charmander.tipo = 'fuego 2'
document.write(`<p>Tipo: ${charmander.tipo}</p>`);


