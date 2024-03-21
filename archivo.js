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
document.write('<br>');
document.write(valor1 == valor2); // false, no son iguales
document.write('<br>');
document.write(valor1 != valor2); // true, porque si son diferentes
document.write('<br>');
document.write(valor1 <= valor2); // false, porque no es menor o igual
document.write('<br>');
document.write(valor1 >= valor2); // true, porque es mayor o igual.. en este caso es mayor



// FUNCIONES MATEMATICAS 
var precios = Math.round(399.53); // lo redondea al valor siguiente, dependiendo de .5, le importa el decimal
document.write('Precio redondeado: ', precios); // es 400
document.write('<br>');

var precis = Math.ceil(299.9);// redondea al siguiente sin importar el .5, sin importar decimal
document.write('Precio redondeado: ', precis); // 300
document.write('<br>');

var precios = Math.floor(540.9); // redondea para abajo, sin importar el decimal
document.write('Precio redondeado: ', precios); // 540
document.write('<br>');

var seno = Math.sin(45); // calcula el seno de un angulo
document.write('Seno de 45: ', seno); // 0.850903
document.write('<br>');

var expo = Math.exp(2); // calcula el exponencial de un numero
document.write('Exponencial de 2: ', expo); // 7.38905
document.write('<br>');

var logaritmo = Math.log(10); // calcula logaritmo
document.write('Logaritmo de 10: ', logaritmo); // 2.30258509
document.write('<br>');

var absoluto = Math.abs(-10); // valor absoluto de un número
document.write('v absoluto de  -10: ', absoluto); // 10
document.write('<br>');

var maximo = Math.max(10,50,600,1,8); // valor maximo de una secuencia
document.write('Mayor valor : ', maximo); // 600
document.write('<br>');

var minimo = Math.min(10,50,600,1,8); // valor minimo de una secuencia
document.write('Minimo valor : ', minimo); // 1
document.write('<br>');

var aleatorio = Math.ramdom(); // valor aleatorio
document.write('Valor aleatorio: ', aleatorio); // 1.54878 ---> cualquier numero
document.write('<br>');

var aleatorioR = Math.round(Math.ramdom()) ; // valor aleatorio redondeado
document.write('Valor aleatorio: ', aleatorioR); // 1 o 0 --> trae esos numero porque no estoy especificando
document.write('<br>');

var aleatorioR = Math.round(Math.ramdom()*10) ; // valor aleatorio redondeado de 0 a 10
document.write('Valor aleatorio: ', aleatorioR); // 4
document.write('<br>');

var valor = Math.sqrt(81) ; // raiz cuadrada de un numero
document.write('Raíz cuadrada de 81: ', valor); // 9
document.write('<br>');

var exponente = Math.pow(4,2) ; // exponente de un número, el primer número elevando al segundo
document.write('Valor de 4 a la 2: ', exponente); // 16
document.write('<br>');