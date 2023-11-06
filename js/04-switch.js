// 1- consulte el saldo, 2- ingrese dinero, 3- extraiga dinero

// opcion = opcion.toUpperCase();//transformo un string a mayusculas

// if(opcion === '1'){
//     document.write(`<p>Su saldo actual es ${saldo}</p>`);
// }else if(opcion === '2'){
//     document.write(`<p>quiere ingresar dinero</p>`);
// }else if(opcion === '3'){
//     document.write(`<p>quiere extraer dinero</p>`);
// }else{
//     alert('Selecciono una opcion erronea')
// }
let saldo = 0;

do {
  let opcion = prompt(
    "Seleccione una opcion: 1- consulte el saldo, 2- ingrese dinero, 3- extraiga dinero"
  );

  console.log(opcion.toLowerCase());
  opcion = opcion.toLowerCase(); //transformo un string a minusculas
  switch (opcion) {
    case "saldo":
    case "consultar saldo":
    case "1":
      document.write(`<p>Su saldo actual es $${saldo}</p>`);
      console.log(`Su saldo actual es de $${saldo}`);
      break;
    case "2":
      let deposito = parseInt(prompt("cuanto deseas depositar?:"));

      console.log(isNaN('hola')) //si no es un numero devuelve true
      console.log(isNaN(100)) //si es un numero devuelve false
// si el deposito es un numero
     if(!isNaN(deposito) && deposito > 0){
          saldo += deposito; // saldo = saldo + deposito
          document.write(
            `<p>Se ingreso $${deposito}, su saldo actual: $${saldo}</p>`
          );
          console.log(`ingrese dinero ${deposito}`);
          console.log(`Su saldo actual es de $${saldo}`);
      }else{
        alert('Ingreso un valor invalido')
      }
      break;
    case "3":
      document.write(`<p>quiere extraer dinero</p>`);
      console.log("extraer dinero");
      break;
    default:
      alert("Selecciono una opcion erronea");
  }
} while (confirm("¿Desea realizar otra operacion?"));
