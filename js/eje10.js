/* Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
 Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

//Declaro las variables

let filas = 7, columnas = 5, i, j, numero = 35;

for (i = 1; i <= filas; i++) {
    for (j = 1; j <= columnas; j++) {
        document.write(numero + "-");
        numero-- ;
    }
    document.write("</br>");
}




