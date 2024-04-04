const fechatual = new Date();

document.write(fechatual); // dia. mes, hora, zona horaria
document.write('<br>');

let fecha = new Date();
document.write('Hoy es: ', fecha.getDate()); // trae el numero de dia, Hoy es: 4
document.write('<br>');
document.write('El mes es: ', fecha.getMonth()); // 4
document.write('<br>')

// Tener en cuenta que trae los numeros del mes de 0 al 9 entonces si es ocutubre tendria que ser
// fecha.getMouth() + 1 
document.write('El año es: ', fecha.getFullYear()); // El año es: 2024
document.write('<br>');
document.write('La hora es: ',  fecha.getHours(), ':',
                                fecha.getMinutes(), ':',
                                fecha.getSeconds()); // La hora es: 20:19:07
// siempre que se abra el navegador va a tener una hora distinta