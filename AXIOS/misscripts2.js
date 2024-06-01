// FORMA BASICA DE AXIOS
//axios.get().then().catch()

let datos = {
    title: 'Nuevo Post',
    body: 'Mi contenido'
}
axios.post('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log(response.data))
    .catch(error=> console.log(error))