// FORMA BASICA DE AXIOS
//axios.get().then().catch()

let datos = {
    title: 'Nuevo Post',
    body: 'Mi contenido'
}
axios.post('https://jsonplaceholder.typicode.com/posts', datos) // hay q poner el objeto donde quiero que vayan los datos
    .then(response => console.log('El post fue creado con éxito', response.data))
    .catch(error=> console.log('Error al publicar: ', error))