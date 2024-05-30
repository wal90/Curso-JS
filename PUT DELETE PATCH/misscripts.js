// METODO PUT

fetch('https://jsonplaceholder.typicode.com.posts/5', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ // cambia todo.. el titilo y el body
        title: 'Nuevo titulo',
        body: 'Nueva descripción'
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));

// es igual 
// function(data){
//      console.log(data)
//}


// METODO DELETE

fetch('https://jsonplaceholder.typicode.com.posts/6', {
    method: 'DELETE',
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));

// METODO PATH

fetch('https://jsonplaceholder.typicode.com.posts/7', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo titulo', // para que solo cambie el titulo
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CUANDO UN SITIO NECESITA CREDENCIALES

let usuario = 'usuario01';
let password = '123456';

fetch('https://jsonplaceholder.typicode.com.posts', {
    method: 'GET',
    credentials: 'include', // q incluya la credenciales
    headers: {
        'Autorization': 'Basic ' + btoa(usuario + ':' + password),
        'Content-Type': 'application/json'

    }
  
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));

/// BEARER ----> funciona con token

let token = 'miToken';

fetch('https://jsonplaceholder.typicode.com.posts', {
    method: 'GET',
    credentials: 'include', // q incluya la credenciales
    cache: 'default',
    redirect: 'follow', // valor por defecto, limite maximo 20
    headers: {
        'Autorization': 'Bearer ' + token,
        'Content-Type': 'application/json'

    }
  
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));

// cache : 'no-cache' ----> va a funcionar como si no hubiera un cache
// cache: 'no-store' -----> no va a almacenar en el cache
// cache: 'reload' -----> fuerza al navegador a buscar el recurso
// cache: 'force-cache' -----> hace que el nav use la copia del cache
// cache: 'only-if-cached' -----> solamente si hay una copia disponible


// PARA REDICCIONAR LA PAGINA ---> redirect
//  redirect: 'error', ---> fecth lleva directamente al error
// redirect: 'manual', ---> devuelve el código de la redireccion en sí --- se cambia el primer then
    // .then(response => {
       // if(response.type === 'opaqueredirect){
        //  let nuevaUbicacion = response.headers.get('location');
        //  console.log('REDIRIGIENDO A:' , nuevaUbicacion )
      // } else {
        // return response.json()
      //}
   // })
