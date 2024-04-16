let elementoSegundos = document.getElementById('tiempoElegido').value; // siempre que hay un get elemnt by id hay que poner un value... asi toma el valor

function comenzarTiempo(){
    // set time out es una funcion que ejecuta una funcion (tiempo cumplido) luego de un determinado tiempo asigando (5000, osea 5 segundo)
    setTimeout(tiempocumplido, 1000*elementoSegundos); // conteo en milisegundos
}

function tiempocumplido(){
    alert('Se termino el tiempo')
}