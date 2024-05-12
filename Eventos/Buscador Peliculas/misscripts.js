let selector = document.getElementById('miSelector');
let input = document.getElementById('miInput');
let boton = document.getElementById('miBoton');
let listado = document.getElementById('miListado');

let archivo = 'peliculas.json';

selector.addEventListener('change', cambiarArchivo);
selector.addEventListener('Cambiomodo', mensajemodo)

function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('Cambiomodo')

}

function mensajemodo(){
    swal.fire('El archivo de busqueda ahora es ' + selector.value);
}