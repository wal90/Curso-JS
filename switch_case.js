let valor;
valor = paserInt(prompt('Ingrese un valor entre 1 y 3'));


switch (valor) {
    case 1:
        document.write('Ingreso 1');
        break;
    case 2:
            document.write('Ingreso 2');
        break;
    case 3:
            document.write('Ingreso 3');
        break;

    default:
        document.write('No es un número válido')
        break;
}


let color;
color = prompt('INGRESE UN COLOR: ROJO/VERDE/AZUL');

switch (color) {
    case 'rojo':
        document.write('Ingreso ROJO')
    break;
    case 'verde':
        document.write('Ingreso VERDE')
    break;
    case 'azul':
        document.write('Ingreso AZUL')
    break;



    default:
        break;
}