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

        document.getElementById("telefono")
        telefono.textContent = salida.telefono;

        document.getElementById("email")
        email.textContent = salida.email;

        document.getElementById("saldo_usd")
        saldo_usd.textContent = salida.saldo[0].monto;

        document.getElementById("saldo_eu")
        saldo_eu.textContent = salida.saldo_eu[1].monto;

        document.getElementById("miembro_desde")
        miembro_desde.textContent = salida.miembro_desde;

     





    
    })

}