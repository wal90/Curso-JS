// FUNCIONES CON PARÁMETROS
// parametros son valores que voy a utilizar
let resultado;
function suma(valor1, valor2) {
    valor1 = parseInt(prompt('INGRESE VALOR 1: '));
    valor2 = parseInt(prompt('INGRESE VALOR 2: '));
    resultado = valor1 + valor2;
    alert('Resultado: ' + resultado)
}

suma()