//----------------------------- PAGINA 2 ---------------------------------

// Para vigilar lo que pasa en el imput
// codigo ASCII, es el codigo de cada caracter del techado

let texto1 = document.getElementById("mitexto");


function verificaNumero(event){
    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault()
    } // el keyCode es el codigo del caracter del teclado
}

texto1.addEventListener('keydown', verificaNumero); // keydown --> es si el usuario ejecuta cualquier techa del teclado

texto1.addEventListener('keyup', function(event){
    console.log('Entrada del usuario: ' + event.target.value) // valor del campo, es todo lo que va a estar en el input
});// keyup --> es cuyando se suelta una tecla


texto1.addEventListener('keypress', function(event){
    console.log('Caracetr ingresado: ' + event.key) // la tecla que se presiono, es lo que se presiona
} ) // keypress ----> es cuando se presiona y se suelta rapidamente una tecla
