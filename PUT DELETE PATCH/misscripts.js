fetch('https://jsonplaceholder.typicode.com.posts/5', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo titulo',
        body: 'Nueva descripción'
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))

// es igual 
// function(data){
//      console.log(data)
//}