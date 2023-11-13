//declarar un array
const personajes = [];
const peliculas = [
  "Interestellar",
  "matrix",
  "lotr",
  2023,
  true,
  "los juegos del hambre",
];

const mostrarPeliculas = (titulo) => {
  document.write(`<h2>${titulo}</h2>`);
  document.write("<ul>");
  for (
    let indicePeliculas = 0;
    indicePeliculas < peliculas.length;
    indicePeliculas++
  ) {
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
  }
  document.write("</ul>");
};

//mostrar un array
console.log(peliculas);
document.write(peliculas);

document.write(`<p>El primer elemento del array es ${peliculas[0]}</p>`);
console.log(peliculas.length);
document.write(
  `<p>El ultimo elemento del array es ${peliculas[peliculas.length - 1]}</p>`
);
document.write(`<p>Un elemento del array es ${peliculas[20]}</p>`);

mostrarPeliculas("Lista de peliculas");

//agregar elementos al array
peliculas.unshift("Batman", "Ironman 1");
mostrarPeliculas(
  `Lista de peliculas, con dos pelis nuevas (${peliculas.length}) `
);

peliculas.splice(3, 0, "scream"); //agrego un elemento en el medio del array
mostrarPeliculas(`Agregamos la peli Scream (${peliculas.length})`);

//agregar un elemento al final del array
peliculas.push("gran turismo");
mostrarPeliculas(`Agregamos la peli Gran turismo (${peliculas.length})`);

//modificar elementos del array
peliculas[6] = "Inception";
mostrarPeliculas(
  `Modificamos el elmento de la posición 6 del array(${peliculas.length})`
);

//eliminar elementos del array
peliculas.shift();
mostrarPeliculas(
  `Eliminamos el primer elemento del array(${peliculas.length})`
);

//borrar elementos del medio del array
peliculas.splice(6, 1);
// peliculas.splice(6,2);
// peliculas.splice(6);
mostrarPeliculas(`Eliminamos un elemento del array(${peliculas.length})`);

//borrar el ultimo elemento del array
peliculas.pop();
mostrarPeliculas(
  `Eliminamos el ultimo elemento del array(${peliculas.length})`
);

peliculas.push('Jurassic park 1', 'Jurassic park 2');
peliculas.splice(2, 0, 'Jurassic park 3');
mostrarPeliculas('Agregamos nuevas pelis de Jurassic park');

//filtrar todas las pelis jurassic park
// const pelisDeJurassicPark = peliculas.filter((pelicula) => pelicula === 'Jurassic park 1' );
const pelisDeJurassicPark = peliculas.filter((pelicula) => pelicula.includes('Jurassic') );
console.log(pelisDeJurassicPark)

console.log(peliculas[0].includes('Jurassic'));

//buscar un elemento en el array
const peliBuscada = peliculas.find( (itemPelicula) => itemPelicula === "Interestellar" );
const peliBuscada2 = peliculas.find( (itemPelicula) => itemPelicula === "rocky" );
console.log(peliBuscada)

document.write(`<p>Peli buscada: ${peliBuscada}</p>`)
// document.write(`<p>Peli buscada (rocky): ${peliBuscada2}</p>`)

// if(peliBuscada2 !== undefined){
//     document.write(`<p>Peli buscada: ${peliBuscada2}</p>`)
// }else{
//     document.write(`<p>No se encontro la pelicula buscada</p>`)
// }

// operador ternario 
// (condicion logica)? true : false;

// const respuesta = (peliBuscada2 !== undefined)? peliBuscada2 : 'No se encontro la pelicula';
document.write(`<p>Peli buscada: ${(peliBuscada2 !== undefined)? peliBuscada2 : 'No se encontro la pelicula'}</p>`)