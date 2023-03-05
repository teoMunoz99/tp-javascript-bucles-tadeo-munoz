/* Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let nombre1, nombre2, nombre3, edad1, edad2, edad3, mayor;

nombre1 = window.prompt("Ingrese el 1°nombre: ");
edad1 = parseInt(window.prompt("Ingrese la edad de : " + nombre1));
nombre2 = window.prompt("Ingrese el 2°nombre: ");
edad2 = parseInt(window.prompt("Ingrese la edad de : " + nombre2));
nombre3 = window.prompt("Ingrese el 3°nombre: ");
edad3 = parseInt(window.prompt("Ingrese la edad de : " + nombre3));

mayor = Math.max(edad1, edad2, edad3);

if (mayor === edad1) {
    alert("El mayor es: " + nombre1);
} else if (mayor === edad2) {
    alert("El mayor es: " + nombre2);
} else if (mayor === edad3) {
    alert("El mayor es: " + nombre3);
}


