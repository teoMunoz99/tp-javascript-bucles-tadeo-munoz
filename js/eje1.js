/* Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
 si la edad ingresada no es un número válido indicarlo en un mensaje.*/

 //Declaro la variable
let edad;

//Valido la edad ingresada 
 do{
    edad = parseInt(window.prompt('Ingrese su edad: '));
 }while(edad <= 0 || edad > 100)

 if(edad <18){
    document.write(`No tienes edad para conducir`);
 }else{
    document.write(`Tienes edad para conducir`);
 }