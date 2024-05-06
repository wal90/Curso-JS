let boton = document.getElementById("boton1");
let div1 = document.getElementById("div1");
let enlace = docuement.getElementById("enlace1");


// ADD EVENT LISTENER ---> MOUSEOVER / CLICK

// function muestramensaje(){
//     alert("Boton presionado!")
// }

// function mensaje2(){
//     alert("Soy un mouseover!")
// }

// boton.addEventListener("mouseover", mensaje2);

// boton.addEventListener("click", muestramensaje);

// boton.addEventListener("click", function(){
//     alert("Presionaste el boton");
// }) // 1 el evento - despues es escuchador

//----------------------------------------------------------------------

// event ----> el evento que se va a reconocer con el addEventListener
function mostrarMensaje(event){
    alert(event.target) // mostrar info del objetivo del evento. target (info) - aca es el boton donde sucedio el evento
    alert(event.currentTarget); // objetivo actual.. es donde se encuentra el boron, osea el div
}

//boton.addEventListener("click", mostrarMensaje);

div1.addEventListener("click", mostrarMensaje)

//------------------------ ENLACE

function bloqueoEnlace(event){
    event.preventDefault(); // para prevenir
    alert('Enlace desabilitado');
}
enlace.addEventListener("click", bloqueoEnlace)


//----------------------------- PAGINA 2 ---------------------------------

// Para vigilar lo que pasa en el imput
// codigo ASCII, es el codigo de cada caracter del techado

let texto1 = document.getElementById("mitexto");


function verificaNumero(event){
    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault()
    } // el keyCode es el codigo del caracter del teclado
}

texto1.addEventListener('keydown', verificaNumero); // keydown --> es si el usuario ejecuta cualquier techa del teclado

texto1.addEventListener('keyup', function(event){
    console.log('Entrada del usuario: ' + event.target.value)
});// keyup --> es cuyando se suelta una tecla


