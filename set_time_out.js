let elementoSegundos = document.getElementById('tiempoElegido').value; // siempre que hay un get elemnt by id hay que poner un value, ESTO SOLO CUANDO TIENE QUE TOMAR LOS VALORES INGRESADOS POR EL USUARIO... asi toma el valor
let elementoTextoAlarma = document.getElementById('textoAlarma');
let elementoSonidoAlarma = document.getElementById('audioAlarma')
function comenzarTiempo(){
    // set time out es una funcion que ejecuta una funcion (tiempo cumplido) luego de un determinado tiempo asigando (5000, osea 5 segundo)
    setTimeout(tiempocumplido, 1000*elementoSegundos); // conteo en milisegundos
}


// function tiempocumplido(){
//     alert('Se termino el tiempo')
// }

function tiempocumplido(){
    //elementoTextoAlarma.textContent = "ENCENDIDO";// textContent: es para que lo seleccionado muestre el texto
    elementoTextoAlarma.style.color = "green";
    elementoSonidoAlarma.play();
}

function comenzarReloj(){
    setInterval(tictac, 1000) // llama a una funcion cada vez que pasa un determinado tiempo, luedo pongo el tiempo
}

function tictac(){
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    let segundos = tiempoActual.getSeconds();

    let textoHora = hora + ':' + minutos + ':' + segundos; 

    elementoTextoAlarma.textContent = textoHora;
}