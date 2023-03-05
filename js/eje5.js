/*Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
 */

//Declaro las variables a utilizar

let numero; //En la variable numero guardo el numero que ingresó el usuario
let resto; //En la variable resto guardo el resultado del resto de la division entera entre el numero y el numero 23
let bandera = true; // Utilizo esta variable con valores booleanos para salir del while.

while (bandera) {
    //Ingreso de numero y control
    do {
        numero = parseInt(window.prompt(`Ingrese un numero: `));
        if (isNaN(numero)) {
            confirm("Debe ingresar valores numericos");
        }
        if (numero < 0 || numero > 99999999) {
            confirm("El numero ingresado no es valido, intente nuevamente");
        }
    } while (isNaN(numero) || numero < 0 || numero > 99999999)

    //Division
    resto = numero % 23;

    //Asignacion de letra
    switch (resto) {
        case 0:
            confirm("La letra de su DNI es: T");
            break;
        case 1:
            confirm("La letra de su DNI es: R");
            break;
        case 2:
            confirm("La letra de su DNI es: W");
            break;
        case 3:
            confirm("La letra de su DNI es: A");
            break;
        case 4:
            confirm("La letra de su DNI es: G");
            break;
        case 5:
            confirm("La letra de su DNI es: M");
            break;
        case 6:
            confirm("La letra de su DNI es: Y");
            break;
        case 7:
            confirm("La letra de su DNI es: F");
            break;
        case 8:
            confirm("La letra de su DNI es: P");
            break;
        case 9:
            confirm("La letra de su DNI es: D");
            break;
        case 10:
            confirm("La letra de su DNI es: X");
            break;
        case 11:
            confirm("La letra de su DNI es: B");
            break;
        case 12:
            confirm("La letra de su DNI es: N");
            break;
        case 13:
            confirm("La letra de su DNI es: J");
            break;
        case 14:
            confirm("La letra de su DNI es: Z");
            break;
        case 15:
            confirm("La letra de su DNI es: S");
            break;
        case 16:
            confirm("La letra de su DNI es: Q");
            break;
        case 17:
            confirm("La letra de su DNI es: V");
            break;
        case 18:
            confirm("La letra de su DNI es: H");
            break;
        case 19:
            confirm("La letra de su DNI es: L");
            break;
        case 20:
            confirm("La letra de su DNI es: C");
            break;
        case 21:
            confirm("La letra de su DNI es: K");
            break;
        case 22:
            confirm("La letra de su DNI es: E");
            break;
        default: ;
    }

    bandera = confirm("¿Deseas ingresar otro numero?");

}
