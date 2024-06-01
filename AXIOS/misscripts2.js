// FORMA BASICA DE AXIOS
//axios.get().then().catch()

let datos = {
    title: 'Nuevo Post',
    body: 'Mi contenido'
}

let miToken = 'Este es mi token';

// interceptor de pedido
axios.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${miToken}`
    }
)

let pedido1 = axios.get('https://api.ejemplo.com/data1');
let pedido2 = axios.get('https://api.ejemplo.com/data2');
let pedido3 = axios.get('https://api.ejemplo.com/data3');

// all ---> pide todo al mismo tiempo
axios.all([pedido1, pedido2, pedido3])
.then(axios.spread((respuesta1, respuesta2, respuesta3)=>{
            // codigo
        })) // spread (distribuir) ---> distribuye las respuestas en tres variables distintas
        .catch(error => {
            //manejar errores
        })

axios.post('https://jsonplaceholder.typicode.com/posts', datos) // hay q poner el objeto donde quiero que vayan los datos
    .then(response => console.log('El post fue creado con éxito', response.data))
    .catch(error=> console.log('Error al publicar: ', error))

    // AXIOS permite hacer varias solicitudes http al mismo tiempo
    // interceptores => de solicitud o de respuesta