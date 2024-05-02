let foto = document.createElement("img");
foto.src = "homero.jpg";

function consulta(){
    let datosjson;
    fetch("resumen.json")
    .then(respuesta => respuesta.json())
    .then((salida)=>{datosjson = salida;

        document.getElementById("titular")
        titular.textContent = salida.titular;

        document.getElementById("no_miembro")
        no_miembro.textContent = salida.no_miembro;

        document.getElementById("direccion")
        direccion.textContent = salida.direccion;



    
    })

}