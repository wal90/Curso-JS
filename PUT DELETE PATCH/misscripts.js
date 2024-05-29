fetch('https://jsonplaceholder.typicode.com.posts/5', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify()
})