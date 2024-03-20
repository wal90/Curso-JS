// VARIABLES --> almacenan datos

/*var nombre = 'Walter'; // VAR ---> de modo global
var Nombre = 'Omar'

let saludo = 'Hola' // LET ---> de modo local

document.write(nombre)*/


// OPERADORES DE ASIGNACION DECREMENTO E INCREMENTO

let a = 1;

document.write('Valor de a: ', a);
document.write('<br>');
a++; // aumenta el valor en 1

document.write('Valor de a: ', a); // ----> ahora a vale 2
document.write('<br>');
a+=1; //---> aumenta el valor segun el numero que se le ponga
document.write('Valor de a: ', a); // ---> ahora vale 3
document.write('<br>');
a--; // ---> resta un valor
document.write('Valor de a: ', a); //---> ahora vale 2 porque le reste 1
document.write('<br>');
a-=1; // ---> le resta uno, porque hay un 1 o sino resta el numero que haya
document.write('Valor de a: ', a); 
document.write('<br>');
a*=2; // ---> multiplica a por el numero, en este caso multiplica por 2
document.write('Valor de a: ', a); 
document.write('<br>');
a/=3; // ---> divide a por el numero, en este caso 3
document.write('Valor de a: ', a); 
document.write('<br>');
a**=2; // ---> potencia el numero de a al 2, osea al numero
document.write('Valor de a: ', a); 


// OPERACIONES DE COMPARACIÓN

let valor1, valor2;
valor1 = 20;
valor2 = 10;

document.write(valor1 > valor2); // true
document.write('<br>');
document.write(valor1 < valor2); // false