//------------------ PÁGINA 4 -------------------------------------------------------

let socket = new WebSocket('ws://localhost:8080') // SOCKET ---> punto final de comunicacion en una red de computadoras, combinacion numero de puerto y numero de IP
// webSocket pide una direccion de origen, ws( es websocket), localhost (es direccion ficticia), 8080( es el puerto ficticio donde se encuentra)

let mensajeingresado = document.getElementById('mensajeIngresado');
let botonenviar = document.getElementById('botonEnviar');

function mostrarMensajes(contenido){
    let contenedorMensaje = document.getElementById('mensajesChat');
    let elementoMensaje = document.createElement('p'); // es para crear un nuevo elemento, en este caso es la p por párrafo

    elementoMensaje.innerText = contenido;
    contenedorMensaje.appendChild(elementoMensaje); // para que se le agregue algo, un hijo seria.. 
    // que contenedor mensaje contenga elemento mensaje

}

botonenviar.onclick = function(){
    let mensaje = mensajeingresado.value; // quiero que me muestre lo que contiene, por eso el value
    mostrarMensaje(mensaje);
    socket.send(mensaje); // acca envio el mensaje
};// este evento activa una funcion que realiza esa tarea

// evento para cuando recibimos un mensaje

socket.onmessage = function(event){
    let mensaje = event.data; // event para manipular ese evento, data en informacion
    mostrarMensaje(mensaje);
}