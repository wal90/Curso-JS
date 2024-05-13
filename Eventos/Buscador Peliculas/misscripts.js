let selector = document.getElementById('miSelector');
let input = document.getElementById('miInput');
let boton = document.getElementById('miBoton');
let listado = document.getElementById('miListado');

let archivo = 'peliculas.json';

selector.addEventListener('change', cambiarArchivo);
selector.addEventListener('Cambiomodo', mensajemodo);
input.addEventListener('keydown', verificaInput);
boton.addEventListener('click', buscar)

function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('Cambiomodo')

}

function mensajemodo(){
    swal.fire('El archivo de busqueda ahora es ' + selector.value);
}

function verificaInput(evento){
    if((evento.keycode <65 || evento.keycode > 90) && evento.keycode != 32 && evento.keycode != 8){
            evento.preventDefault()
    }
}

function buscar(){
    listado.innetHTML = ''; // para que se limpe el input con la busqueda anterior --- innetHTML reemplaza una sintaxis por una nueva
    fetch(archivo)
        .then(respuesta => respuesta.json)
        .then(function(salida){
            for(let item of salida.data){
                if(item.nombre.startsWhith(input.value.toUpperCase())){
                    let p = document.createElement('p');
                    p.id = item.nombre;
                    p.innetHTML = item.sinopsis;
                    p.style.display = 'none';

                    let li = document.createElement('li');
                    li.innerHTML = item.nombre;
                    li.addEventListener('mouseover', function(){
                        let p = document.getElementById(item.nombre);
                        p.style.display = 'block'
                    });
                    li.addEventListener('mouseout', function(){
                        let p = document.getElementById(item.nombre);
                        p.style.display = 'none';
                    })
                    li.appendChild(p);
                    listado.appendChild(li);
                }
            }
        })
}