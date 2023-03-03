/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse
 todas las cadenas concatenadas con un guión -. 
nota: usar la funcion confirm()*/

//Declaro las variables a utilizar

let cadena = ""; //En la variable cadena almaceno todas las cadenas de caracteres que ingresó el usuario.
let texto; //En la variable texto guardo cada cadena que ingresa el usuario.
let bandera = true; // Utilizo esta variable con valores booleanos para salir del while.

while (bandera) {
    texto = prompt("Ingresa una cadena de texto:");

    if (texto === null) {
        bandera = false;
    } else {
        cadena += texto + "-";
        bandera = confirm("¿Deseas ingresar otra cadena de texto?");
    }
}

alert("Cadenas ingresadas: " + cadena);