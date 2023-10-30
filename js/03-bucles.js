/*
while(condicion logica){
    todo el codigo que quiero ejecutar varias veces
    agregar algo para que la condicion logica no se cumpla
}

*/

let renglon = 100;

// document.write("<p>Este es el renglon número " + renglon + " </p>");

while( renglon <= 20){
    document.write(`<p>Este es el renglon número ${renglon} </p>`);
    renglon++; // renglon = renglon + 1;
}

/*
do{
    todo el codigo que quiero ejecutar varias veces
    agregar algo para que la condicion logica no se cumpla
}while(condicion logica)
*/

let contador = 100;

do{
   
    document.write(`<p>Este es el renglon número ${contador} (do-while)</p>`);
    contador++; // renglon = renglon + 1;
}while( contador <= 10)

/*
for(inicializar una variable; condicion logica; decrementar o incremetar ){
     todo el codigo que quiero ejecutar varias veces
}
*/

for(let cuentaRegresiva = 0; cuentaRegresiva > 0; cuentaRegresiva--){
    document.write(`<p>Cuenta regresiva N: ${cuentaRegresiva}</p>`);
}