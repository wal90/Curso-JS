// FOR IN ---> utiliza un rango de valores especificos para hacer un bucle
// SOLO FUNCIONA PARA OBJETOS QUE TIENEN UNA CANTIDAD DE ELEMENTOS, no para valores enteros

let palabra = 'JavaScript';
 
// let f = seria el contador, es la variable de control, esa variable va a realizar la condicion que le vamos a poner
// en este caso el for in va a dar una vuelta por cada letra de la palabra
for(let f in palabra){
    document. write(f);
    document.write('<br'); // va ir del 0 al 9.. porque la palabra Javascript tiene 10 letras
}

// for(let f in palabra){
//     document. write(palabra[f]); // de esta manera me trae cada letra
//     document.write('<br'); // 
// }

// ------------------------------------------
// quiero saber cuantas vocales tiene la palabra ej:

let palabra2 = 'murcielago';
let vocal = 0; // aca van a ir la cantidad de vocales que encuentro en mi variable

for(let f in palabra2){
    if (palabra2[f]== 'a' ||palabra2[f]== 'e' ||palabra2[f]== 'i' ||palabra2[f]== 'o' ||palabra2[f]== 'u'){
        vocal++; // que le sume un valor a la variable valor
    }
    
}
document.write('Cantidad de vocales: ', vocal)