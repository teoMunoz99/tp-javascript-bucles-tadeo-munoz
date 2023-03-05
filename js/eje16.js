/* Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

let i, texto = window.prompt("Ingrese su texto: ");

for(i= texto.length - 1; i >= 0; i--){
    document.write(texto[i]);
}