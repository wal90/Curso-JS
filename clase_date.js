const fechatual = new Date();

document.write(fechatual); // dia. mes, hora, zona horaria
document.write('<br>');

let fecha = new Date();
document.write('Hoy es: ', fecha.getDate()); // trae el numero de dia, Hoy es: 4
document.write('<br>');
document.write('El mes es: ', fecha.getMonth()); // 4

// Tener en cuenta que trae los numeros del mes de 0 al 9 entonces si es ocutubre tendria que ser
// fecha.getMouth() + 1 