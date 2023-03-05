/* Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/

let i = 0, bandera = true, texto = window.prompt("Ingrese su texto: ");

while(bandera){
    if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
        bandera = false;
    }else{
        i++;
    }
}

alert(`La primera vocal es "${texto[i]}" y su posicion es "${i + 1}"`);