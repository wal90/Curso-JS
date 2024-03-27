// let f = 1;

// while (f <=10) {
//     document.write('Vuelta no. ', f);
//     document.write('<br>');
//     f++;
// }
// document.write('FIN DEL BUCLE')

let f = 1;
let suma = 0;
let valor;

while (f <= 5) { // PARA QUE SOLO LO HAGA 5 VECES
    valor = parseInt(prompt('Ingrese valor'))
    suma = suma + valor;
    f++;
}
document.write('La suma es: ', suma, '<br>')