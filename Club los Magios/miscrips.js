let foto = document.createElement("img");
foto.src = "homero.jpg";

function consulta(){
    let datosjson;
    fetch("resumen.json")
    .then(respuesta => respuesta.json())
    .then((salida)=>{datosjson = salida;
    
    })

}