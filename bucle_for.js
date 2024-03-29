// BUCLE FOR se usa cuando sabemos las veces que tiene que iterar


// 1 desde donde yo quiero que inicie el bucle
// 2 es la condicion para que el bucle se realice
// 3 para darle un valor a f... y salga del bucle osea termine


// for (let f= 1; f < 5; f++) {
//     document.write('Vuelta no. ', f);
//     document.write('<br>')  
// }
// document.write('FIN DEL BUCLE!!')


// f+=2 ---> siginifica que f vaya de dos en dos empezando desde el 1, entonces: 1,3,5,7,9...

// for (let f= 1; f < 20; f+=2) {
//     document.write('Valor de f: ', f);
//     document.write('<br>')  
// }
// document.write('FIN DEL BUCLE!!')

//------------------------------------------------------


const frutas = ['manzanas', 'peras', 'uvas', 'naranjas'];

// Mientras f valga menos el el numero de cantidad del array, en la vuelta va a traer las frutas
// f= seria el numero de ubicacion dentro del array
// frutas[f] seria el nombre, osea 'manzanas', 'peras'...
for(let f = 0; f < frutas.length; f++){
    document.write('Fruta: ', f, '=', frutas[f]);
    document.write('<br>')
}