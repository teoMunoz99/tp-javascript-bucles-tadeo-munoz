// Realiza un script que cuente el número de vocales que tiene un texto.

let i, vocales = 0, texto = window.prompt("Ingrese su texto: ");

for(i=0; i < texto.length; i++){
    if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
        vocales++;
    }
}

alert("El numero de vocales en el texto es: " + vocales);