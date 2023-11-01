// 1- consulte el saldo, 2- ingrese dinero, 3- extraiga dinero

let opcion = prompt('Seleccione una opcion: 1- consulte el saldo, 2- ingrese dinero, 3- extraiga dinero');

let saldo = 0;
console.log(opcion.toLowerCase()); 
opcion = opcion.toLowerCase();//transformo un string a minusculas
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

switch(opcion){
    case 'saldo':
    case 'consultar saldo':
    case '1':
        document.write(`<p>Su saldo actual es ${saldo}</p>`);
        break;
    case '2':
        document.write(`<p>quiere ingresar dinero</p>`);
        break;
    case '3':
        document.write(`<p>quiere extraer dinero</p>`);
        break;
    default:
        alert('Selecciono una opcion erronea');
}