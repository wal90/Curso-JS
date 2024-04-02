// RETURN ---> quiere decir que devuelve algo

/*function suma( a,b){
    return a + b
}

document.write(suma(30,60));*/

// otra manera

let resultado;

function suma(a,b){
    resultado = a +b;
    return resultado;
}

document.write(suma(30,60));
document.write('<br>');

//---------------------------------------------------------

function saludar(){
    return 'Hola a todos!';
}

var mensaje = saludar();
document.write(mensaje);
document.write('<br>');

//---------------------------------------------------------

function VerColor(valor){
    valor = parseInt(prompt('INGRESE VALOR 1 / 3:'))
    switch(valor){
        case 1:
            return 'ROJO';
        case 2:
            return 'VERDE';
        case 3:
            return 'AMARILLO';
        default:
            return 'VALOR INCORRECTO' 
          }
}

alert(VerColor())
// docuemnt.write(Vercolor())