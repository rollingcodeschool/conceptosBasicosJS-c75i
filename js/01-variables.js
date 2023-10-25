// Esto es un comentario de una unica linea

/* Esto es un comentario
de multiples
lineas */

// declarar una variable (var - let - const)

let anioActual = 2023;
const universe = "https://universe.rollingcodeschool.com/";

//mostrar mensajes
console.log(anioActual);
console.log("anioActual");
console.log("Año actual: " + anioActual);
console.log(universe);

//modificar el contenido de una variable
anioActual = 2024;
console.log(anioActual);

document.write("<p class='parrafoDestacado'>Esto es una prueba de document.write</p>");

//ventanas emergentes
alert('Hola mundo');

// solicitar a un usuario un nombre y mostrar un saludo;
const nombreUsuario = prompt('Ingrese su nombre');

console.log(nombreUsuario);

document.write('<p>Bienvenido '+ nombreUsuario +'</p>');

// solicitar a un usuario un precio de un producto en dolares;
const precioSolicitado = parseFloat(prompt('Ingrese un valor en dolares'));
console.log(precioSolicitado)

// parseInt('50')
// parseFloat('50.4')

alert ('El importe indicado corresponde a USD$'+(precioSolicitado + 2) );

