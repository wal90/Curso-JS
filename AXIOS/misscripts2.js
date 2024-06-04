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
        return config;
    }, (error)=>{
        return Promise.reject(error)
    }
)

// de respuesta
axios.interceptors.response.use(
    (respuesta) =>{
        respuesta.data.customField = 'Nuevo campo';
        return respuesta
    }, (error) => {
        return Promise.reject(error)
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



    // BASES DE DATOS 
    // conjunto de datos organizados y estructurados que pertenecen a un mismo contexto
    // base de datos relacionales y no relacionales, la diferencia es la forma en que se almacenan

// relacional ----> modelo relacional, relacion entre cada tabla
// atributos --> son caracteristicas
// clave primaria PK (PRIMARY KEY) --> valores únicos