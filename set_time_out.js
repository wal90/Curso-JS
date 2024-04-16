function comenzarTiempo(){
    // set time out es una funcion que ejecuta una funcion (tiempo cumplido) luego de un determinado tiempo asigando (5000, osea 5 segundo)
    setTimeout(tiempocumplido, 5000); // conteo en milisegundos
}

function tiempocumplido(){
    alert('Se termino el tiempo')
}