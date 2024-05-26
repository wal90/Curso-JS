async function crearPost(titulo, contenido){
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com.post', { // obj ini
            metodo: "POST" ,
            header: {
                "Content-Type": "application/json"
            } , // QUE TIPO DE FORMATO ESTAMOS ENVIANDO EL EN CUERPO DE LA SOLICITUD
            body: JSON.stringify()// funcion de javascrip que convierte un bjt de javascript en una cadena json
        })
    } catch (error) {
        console.error('Algo salio mal al crear el registro:'), error
    }

    
}