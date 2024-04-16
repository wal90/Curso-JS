let elementoSegundos = document.getElementById('tiempoElegido').value; // siempre que hay un get elemnt by id hay que poner un value, ESTO SOLO CUANDO TIENE QUE TOMAR LOS VALORES INGRESADOS POR EL USUARIO... asi toma el valor
let elementoTextoAlarma = document.getElementById('textoAlarma');
function comenzarTiempo(){
    // set time out es una funcion que ejecuta una funcion (tiempo cumplido) luego de un determinado tiempo asigando (5000, osea 5 segundo)
    setTimeout(tiempocumplido, 1000*elementoSegundos); // conteo en milisegundos
}


// function tiempocumplido(){
//     alert('Se termino el tiempo')
// }

function tiempocumplido(){
    elementoTextoAlarma.textContent = "ENCENDIDO";// textContent: es para que lo seleccionado muestre el texto
    elementoTextoAlarma.style.color = "green";
}