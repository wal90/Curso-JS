let selector = document.getElementById('miSelector');
let input = document.getElementById('miInput');
let boton = document.getElementById('miBoton');
let listado = document.getElementById('miListado');

let archivo = 'peliculas.json';

selector.addEventListener('change', cambiarArchivo);

function cambiarArchivo(){
    archivo = selector.value;
}