async function crearPost(titulo, contenido){
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com.posts', { // obj ini
            metodo: "POST" ,
            header: {
                "Content-Type": "application/json"
            } , // QUE TIPO DE FORMATO ESTAMOS ENVIANDO EL EN CUERPO DE LA SOLICITUD
            body: JSON.stringify({
                title: titulo,
                body: contenido,
                userID: 1,
            })// funcion de javascrip que convierte un bjt de javascript en una cadena json
        })
        if(!respuesta.ok){ // si no es true
            throw new Error("Error en la solicitud: " + respuesta.statusText); // estatus text es el estatus ej 200, 201 etc
        }
    } catch (error) {
        console.error('Algo salio mal al crear el registro:'), error
    }

    
}