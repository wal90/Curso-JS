
let audio = document.getElementById('audio');
let listaCanciones = document.getElementById('listaCanciones');

listaCanciones.addEventListener('change', cambiarCancion);

function cambiarCancion(){
    let cancionElegida = listaCanciones.value;
    audio.src = cancionElegida;
    audio.play();

    let evento = new CustomEvent('CambioDeCancion'); // CustomEvent ---> es un evento personalizado
    // hay q definir cuando se ejecuta mi evento
    audio.dispatchEvent(evento);
}

audio.addEventListener('CambioDeCancion', mostrarCancion);

function mostrarCancion(){
    console.log('Canción actual: ' + listaCanciones.value);
}
