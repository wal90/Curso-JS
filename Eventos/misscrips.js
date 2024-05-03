let boton = document.getElementById("boton1");

function muestramensaje(){
    alert("Boton presionado!")
}


boton.addEventListener("click", muestramensaje)

// boton.addEventListener("click", function(){
//     alert("Presionaste el boton");
// }) // 1 el evento - despues es escuchador