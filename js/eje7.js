/* Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

//Declaro las variables

let numeroRepeticiones; //aqui guardo el numero de repeticiones que ingrese el usuario
let i, j; //Uso estas variables como contador

//Ingreso y control del numero de repeticiones
do {
    numeroRepeticiones = parseInt(window.prompt(`Ingrese el numero: `));
    if (isNaN(numeroRepeticiones)) {
        confirm("Debe ingresar solo valores numericos");
    }else if(numeroRepeticiones > 50){
        confirm("El valor ingresado no debe ser mayor a 50");
    }
} while (isNaN(numeroRepeticiones) || numeroRepeticiones > 50)

for (i = numeroRepeticiones; i > 0; i--) {
    for (j = 0; j < i; j++) {
        document.write(i);
    }
    document.write("</br>");
}