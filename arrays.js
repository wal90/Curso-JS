// Declaracion de un array
let numeros = [15,80,650,50.30,-10];
document.write('Elementos: ', numeros);
document.write('<br>');

document.write('Primer elemento: ', numeros[0]); // 15
document.write('<br>');
numeros[0] = 14;
document.write('Elementos: ', numeros); //---> ahora el primer elemento es el 14
document.write('<br>-----------------');

let frutas = ['manzanas', 'peras', 'naranjas', 'mangos'];
document.write('<br>');
document.write('Frutas: ', frutas);
document.write('<br>');

// METODOS DE LOS ARRAYS

// VER ACNTIDAD DE ELEMENTOS
document.write('Cantidad: ', frutas.length); //4
document.write('<br>');

// SABER ÚLTIMO ELEMENTOS
document.write('Último elemento: ', numeros[numeros.length-1]); // -10
document.write('<br>');

// ARRAYS EN TIPO TEXTO
document.write('En string: ', numeros.toString()); // ahora son de tipo texto
document.write('<br>');

// UNIR TIPOS DE ARRAYS
let letras = ['a', 'b', 'c'];
let numeros2 = [1,2,3];
document.write('Alfanumerico: ', letras.concat(numeros2));
document.write('<br>');

// BORRAR EL ÚLTIMO ELEMENTO 
numeros.pop()
document.write(numeros)// 14, 80, 650, 50.3
document.write('<br>');

// AGREGAR ELEMENTO AL FINAL
numeros.push(-10);
document.write(numeros)// 14, 80, 650, 50.3, -10
document.write('<br>');

// ELIMINAR PRIMER ELEMENTO
numeros.shift();
document.write(numeros)// 80, 650, 50.3, -10
document.write('<br>');

// AGREGAR ELEMENTO AL INICIO
numeros.unshift(1000);
document.write(numeros)//1000, 80, 650, 50.3, -10
document.write('<br>');

// ELIMINAR ELEMENTOS A PARTIR DE UNA UBICACIÓN
numeros.splice(2,3);
document.write(numeros)//1000, 80 ---> se quedan dos, sacan 3
document.write('<br>');

// COPIAR UN NUEVO ARRAY
let cantidades = [100,200,500,500,800];
let copia = cantidades.slice(1,4); // siempre es la anterior al número que puse (4)
document.write('Array copia: ', copia); // 200,500,600
document.write('<br>');

// ORGANIZAR ALFABETICAMENTE
let objetos = [ 'botella', 'auto','planeta', 'zorro'];
document.write(objetos.sort()); //  'auto','botella', 'planeta', 'zorro';
document.write('<br>');

// ORGANIZAR DE MANERA REVERSA
document.write(objetos.reverse()); // trae el array de arriba de manera al revea... 'zorro', 'planeta'...
document.write('<br>')

// ARRAY CON VALORES INALTERABLES
// CON const NO SE PUEDEN ALTERAR NINGUNO DE LOS VALORES, DA ERROR
const autos = ['Toyota', 'Chevrolet', 'BMW'];
document.write('Autos: ', autos);
document.write('<br>');






