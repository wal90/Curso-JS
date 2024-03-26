// OPERADOR && (y)  ---> se cumplen las dos condiciones 
let a, b;
a = 30;
b = 30;
document.write(a == b); // true 


let continente, edad;
continente = prompt('INGRESE SU CONTINENTE: ');
edad = prompt('ingrese su edad: ');

if (continente == 'America' && edad >= 18){
    document.write('Eres un adulto americano')
} else {
    document.write('O  no eres adulto, o no eres americano')
}

// OPERADOR || (OR) ---> con que se cumpla una condición ya es VERDADERO

let dia, mes, anio; // No se puede poner una variable con Ñ
dia = prompt('INGRESE DIA: ');
mes = prompt('INGRESE MES: ');
anio = prompt('INGRESE AÑO');

if ( mes == 1 || mes == 2 || mes == 3){
    document.write('Pertenese al primer trimestre!');
} else {
    document.write('No pertenece al primer trimestre')
}

