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
    } catch (error) {
        console.error('Algo salio mal al crear el registro:'), error
    }

    
}