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
        no_miembro.textContent = 'No. de miembro: ' + salida.no_miembro;

        document.getElementById("direccion")
        direccion.textContent = 'Dirección: ' + salida.direccion;

        document.getElementById("telefono")
        telefono.textContent = 'Teléfono: ' + salida.telefono;

        document.getElementById("email")
        email.textContent ='Email: ' +  salida.email;

        document.getElementById("saldo_usd")
        saldo_usd.textContent = 'Monto en $US: ' + salida.saldo[0].monto;

        document.getElementById("saldo_eu")
        saldo_eu.textContent = 'Monto en Euros: ' + salida.saldo_eu[1].monto;

        document.getElementById("miembro_desde")
        miembro_desde.textContent = 'Miembro desde: ' + salida.miembro_desde;

        let imagen = getElementById("foto");
        imagen.appendChild(foto)

     





    
    })

}