//-------------------- PÁGINA 3 -------------------------------------------------


let menu = document.getElementById('mimenu');
let botonMenu = document.getElementById('miboton');

// botonMenu.addEventListener('click', function(){ // para cuando se haga click
//     menu.style.display = 'block';
// });

botonMenu.addEventListener('mouseover', function(){
    menu.style.display = 'block';
});

botonMenu.addEventListener('mouseout', function(){
    menu.style.display = 'none';
});

document.addEventListener('mousemove', function(event){ // Mouseover ---> para cuando se mueve el mouse
    console.log('Posición X: ' + event.clientX + ' - Posición Y: ' + event.clientY) // Lo que hace es mostrar las coordenandas de donde se encuentra el mouse en el documento
})