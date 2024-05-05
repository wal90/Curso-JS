let boton = document.getElementById("boton1");
let div1 = document.getElementById("div1");


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
    alert(event.target) // mostrar info del objetivo del evento. target (info)
}

boton.addEventListener("click", mostrarMensaje);