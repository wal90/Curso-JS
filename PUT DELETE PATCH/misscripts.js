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
let usuario2 = 'usuario01';
let password2 = '123456';
let token = 'miToken';

fetch('https://jsonplaceholder.typicode.com.posts', {
    method: 'GET',
    credentials: 'include', // q incluya la credenciales
    headers: {
        'Autorization': 'Bearer ' + token,
        'Content-Type': 'application/json'

    }
  
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));