function obtenerInfo(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(respuesta){
        let listaInfoormacion = document.getElementById('listaInfo')
    })
}