/* Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

let i, j; //Uso estas variables como contador

for(i = 1; i <= 30; i++){
    for(j = 0; j < i; j++){
     document.write(i);   
    }
    document.write("</br>");
}