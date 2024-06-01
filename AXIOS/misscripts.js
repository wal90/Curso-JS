function obtenerInfo(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(respuesta){
        let listaInformacion = document.getElementById('listaInfo');
        for(let f= 0; f <respuesta.data.length; f++){
            let elemento = document.createElement('li');
            elemento.innerText = respuesta.data[f].title;
            listaInformacion.appendChild(elemento)
        }
    })
    .catch(function(error){
        console.log(error)
    })
}