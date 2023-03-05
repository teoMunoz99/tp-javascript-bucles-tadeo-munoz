/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

//Declaro las variables a utilizar

let total = 0; //En la variable total almaceno la suma de todos los numeros que ingresó el usuario.
let numero; //En la variable numero guardo cada numero que ingresa el usuario.
let bandera = true; // Utilizo esta variable con valores booleanos para salir del while.

while (bandera) {
    //Ingreso de numero y control
    do {
        numero = parseInt(window.prompt(`Ingrese un numero: `));
        console.log(numero);
        if (isNaN(numero)) {
            confirm("Debe ingresar valores numericos");
        }
    } while (isNaN(numero))

    //Suma del numero ingresado
    total += numero;
    bandera = confirm("¿Deseas ingresar otro numero?");

}
//Muestra en pantalla de la suma total
alert("La suma total de los numeros ingresados es: " + total);