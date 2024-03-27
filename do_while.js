// let valor;
// do {
//     valor = parseInt(prompt('Ingrese un valor 1 para salir..'));
//     document.write('Ingreso valor: ', valor)
//     document.write('<br>')

// } while (valor !== 1); // Mientras que haga esto.. que haga lo de arriba, cuando se cumple se termina
// document.write('Fin del bucle')

// Do hace algo.. MIENTRAS se cumpla esta condición

let usuario, clave, control;

control = 0;
usuario = prompt('Ingrese usuario: ');
clave = prompt('Ingrese su contraseña: ');

do { // Para quse se pueda ingresar mientras la clave sea 'Admin'
    if(clave != 'Admin'){
        clave = prompt('CONTRASEÑA INCORRECTA\n '+
                'INTENTE DE NUEVO');
                control = 0;
    } else {
        control = 1
    }
} while (control != 1); // Cuando el control sea 1 para de ejecutarse
document.write('ACCESO CORRECTO!')