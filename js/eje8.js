/* Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

//Declaro las variables

let numeroRepeticiones; //aqui guardo el numero de repeticiones que ingrese el usuario
let i, j; //Uso estas variables como contador

//Ingreso y control del numero de repeticiones
do {
    numeroRepeticiones = parseInt(window.prompt(`Ingrese el numero: `));
    if (isNaN(numeroRepeticiones)) {
        confirm("Debe ingresar solo valores numericos");
    } else if (numeroRepeticiones > 50) {
        confirm("El valor ingresado no debe ser mayor a 50");
    }else if(numeroRepeticiones <=0){
        confirm("El valor ingresado debe ser mayor a 0");
    }
} while (isNaN(numeroRepeticiones) || numeroRepeticiones > 50 || numeroRepeticiones <= 0)

for (i = 0; i <= numeroRepeticiones; i++) {
    for(j = 1; j <= i; j++){
        document.write(j);
    }
    document.write("</br>");
}