// FOR IN ---> utiliza un rango de valores especificos para hacer un bucle
// SOLO FUNCIONA PARA OBJETOS QUE TIENEN UNA CANTIDAD DE ELEMENTOS, no para valores enteros

let palabra = 'JavaScript';
 
// let f = seria el contador, es la variable de control, esa variable va a realizar la condicion que le vamos a poner
// en este caso el for in va a dar una vuelta por cada letra de la palabra
for(let f in palabra){
    document. write(f);
    document.write('<br'); // va ir del 0 al 9.. porque la palabra Javascript tiene 10 letras
}