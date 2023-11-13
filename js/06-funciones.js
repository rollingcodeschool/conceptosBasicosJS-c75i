//funciones declarativas
function saludar() {
    //todo el codigo que sabe hacer esa funcion
    document.write("<p>Hola mundo</p>");
  }
  
  function saludoNuevo(nombreSolicitado, apellidoSolicitado) {
    document.write(`<p>Hola ${nombreSolicitado}, ${apellidoSolicitado} 😎</p>`);
  }

// function multiplicar(numero1, numero2){
//     const resultado = numero1 * numero2;
//     console.log(resultado);
//     return resultado;
// }

//arrow functions
// const multiplicar = (numero1, numero2) => {
//     const resultado = numero1 * numero2;
//     console.log(resultado);
//     return resultado;
//   };

const multiplicar = (numero1, numero2) => numero1 * numero2;

//llamar o invocar a una funcion
saludar();

const nombre = prompt("Ingrese un nombre");
const apellido = prompt("Ingrese un apellido");

saludoNuevo(nombre, apellido);
saludoNuevo("Jocker");
saludoNuevo("Harry", "Potter");

const resultadoNuevo = multiplicar(30, 3);
document.write(
  `<p>El resultado de la multiplicación fue: ${resultadoNuevo}</p>`
);
document.write(
  `<p>El resultado de la multiplicación fue: ${multiplicar(45, 3)}</p>`
);


