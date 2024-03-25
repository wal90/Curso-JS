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
}
