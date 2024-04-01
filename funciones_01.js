// Función declarativa
function saludar(){
    alert('Hola a todos!!'); // alert es una ventana
}

function despedir(){
    document.write('Adios a todos!');
}
saludar(); // las funciones siempre se invocan

// Dentro de una funcuion se puede invocar a otra e

function saludar2(){
    document.write('Hola a todos!!'); // alert es una ventana
    document.write('<br>')
    saludar();
}

// Otro ejemplo:
/*function saludar(){
    let saludo = prompt('INGRESE UN SALUDO');
    alert(saludo)
}*/