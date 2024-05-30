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
fetch('https://jsonplaceholder.typicode.com.posts', {
    method: 'GET',
    credentials: 'include', // q incluya la credenciales
  
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));