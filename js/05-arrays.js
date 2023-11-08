//declarar un array
const personajes = [];

const peliculas = ['Interestellar', 'matrix', 'lotr', 2023, true, 'los juegos del hambre'];

//mostrar un array
console.log(peliculas);
document.write(peliculas);

document.write(`<p>El primer elemento del array es ${peliculas[0]}</p>`);
console.log(peliculas.length);
document.write(`<p>El ultimo elemento del array es ${peliculas[peliculas.length - 1]}</p>`);
document.write(`<p>Un elemento del array es ${peliculas[20]}</p>`);

document.write('<h2>Lista de peliculas</h2>')
document.write('<ul>')
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write('</ul>');

//agregar elementos al array
peliculas.unshift('Batman', 'Ironman 1');
document.write(`<h2>Lista de peliculas, con dos pelis nuevas (${peliculas.length}) </h2>`)
document.write('<ul>')
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write('</ul>');

peliculas.splice(3, 0, 'scream'); //agrego un elemento en el medio del array
document.write(`<h2>Agregamos la peli Scream (${peliculas.length}) </h2>`)
document.write('<ul>')
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write('</ul>');

//agregar un elemento al final del array
peliculas.push('gran turismo');
document.write(`<h2>Agregamos la peli Gran turismo (${peliculas.length}) </h2>`)
document.write('<ul>')
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write('</ul>');

//modificar elementos del array
peliculas[6] = 'Inception';
document.write(`<h2>Modificamos el elmento de la posición 6 del array(${peliculas.length}) </h2>`)
document.write('<ul>')
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write('</ul>');

//eliminar elementos del array
peliculas.shift();
document.write(`<h2>Eliminamos el primer elemento del array(${peliculas.length}) </h2>`)
document.write('<ul>')
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write('</ul>');

//borrar elementos del medio del array
peliculas.splice(6,1);
// peliculas.splice(6,2);
// peliculas.splice(6);
document.write(`<h2>Eliminamos un elemento del array(${peliculas.length}) </h2>`)
document.write('<ul>')
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write('</ul>');

//borrar el ultimo elemento del array
peliculas.pop();
document.write(`<h2>Eliminamos el ultimo elemento del array(${peliculas.length}) </h2>`)
document.write('<ul>')
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++){
    document.write(`<li>${peliculas[indicePeliculas]}</li>`)
}
document.write('</ul>');

