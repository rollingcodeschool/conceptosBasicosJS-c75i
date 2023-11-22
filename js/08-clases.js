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
        this.estado = true; //valor por defecto
    }
    //propiedades computadas get y set
    get tipo(){
        return this.#tipo;
    }

    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }

    //metodos
    mostrarDatos(){
        document.write(`<h2>Pokemon: ${this.nombre}</h2>
        <ul>
        <li>Tipo: ${this.tipo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Evolucion: ${this.evolucion}</li>
        <li>Num Pokedex: ${this.numPokedex}</li>
        </ul>`)
    }
};

class PokemonLegendario extends Pokemon{
    #rareza;
    #ataqueEspecial;
    constructor(nombreParam, tipo, peso, altura, evolucion, ataques, numPokedex, fuerza, rareza, ataqueEspecial){
       super(nombreParam, tipo, peso, altura, evolucion, ataques, numPokedex, fuerza);
       this.#rareza = rareza;
       this.#ataqueEspecial = ataqueEspecial;
    }

    get rareza(){
        return this.#rareza;
    }
    set rareza(nuevaRareza){
        if(nuevaRareza.length >= 3 && nuevaRareza.length <=10 ){
            this.#rareza = nuevaRareza;
        }else{
            alert('ingresaste un valor erroneo')
        }
    }
    get ataqueEspecial(){
        return this.#ataqueEspecial;
    }
    set ataqueEspecial(nuevoAtaqueEspecial){
         this.#ataqueEspecial = nuevoAtaqueEspecial;
    }
    //agregar mas metodos
    mostrarDatosNuevos(){

    }
    //polimorfismo
    mostrarDatos(){
        document.write(`<h2>Pokemon: ${this.nombre}</h2>
        <ul>
        <li>Num Pokedex: ${this.numPokedex}</li>
        <li>Tipo: ${this.tipo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Evolucion: ${this.evolucion}</li>
        <li>Rareza: ${this.rareza}</li>
        <li>Ataques especiales: ${this.ataqueEspecial}</li>
        </ul>`)
    }
} 


//crear o instanciar un objeto
const charmander = new Pokemon('Charmander', 'fuego', 15, 1.20,['charmeleon', 'charizard'], ['blaze','ascuas','lanzallamas'], 4, 4);
const togepi = new Pokemon ('Togepi', 'hada', 1.5, 0.3, ['Togetic','togekiss'], ['gracia serena', 'dicha y entusiasmo', 'placaje'], 175, 2)

console.log(charmander)
document.write(`<h2>Pokemon: ${charmander.nombre}</h2>`);
document.write(`<p>Tipo: ${charmander.tipo}</p>`);

charmander.tipo = 'fuego 2'
document.write(`<p>Tipo: ${charmander.tipo}</p>`);

charmander.mostrarDatos();

togepi.mostrarDatos();

const mewtwo = new PokemonLegendario('Mewtwo','psiquico', 122, 2, [], ['placaje','Confusión'],150, 7, 'Infrecuente',['charge beam', 'electro ball']);

mewtwo.mostrarDatos();