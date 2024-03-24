let nombre, edad;
nombre = prompt('INGESE SU NOMBRE: ');
edad = prompt('ingese su edad: ');
edad = parseInt(edad); // Lo parseo para que si o si tome numero entero no otro tipo de dato

if (edad >= 18) {
    document.write('BIENVENIDO!!', nombre)
} else {
    if (edad < 18) {
        document.write(nombre, 'Eres menor de edad');
    }
    else{
        document.write('NO HAS INGRESADO DATOS');
    }
   
}