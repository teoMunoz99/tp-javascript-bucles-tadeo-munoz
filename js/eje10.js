/* Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
 Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

//Declaro las variables

let filas, columnas, i, j, numero;

//Ingreso y control del numero de repeticiones
do {
    filas = parseInt(window.prompt(`Ingrese el numero de filas: `));
    columnas = parseInt(window.prompt(`Ingrese el numero de columnas: `));
    if (isNaN(filas) || isNaN(columnas)) {
        confirm("Debe ingresar solo valores numericos");
    } else if (filas < 0 || columnas < 0) {
        confirm("Los valores ingresados deben ser mayores a 0");
    }
} while (isNaN(filas) || isNaN(columnas) || filas < 0 || columnas < 0)

numero = filas * columnas;

for (i = 1; i <= filas; i++) {
    for (j = 1; j <= columnas; j++) {
        document.write(numero + "-");
        numero--;
    }
    document.write("</br>");
}




