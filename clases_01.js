// La CLASE es como un molde para trabajar objetos
// Forma de DEFINIR objetos y estructura de datos con un conjunto de propiedades y métodos
// Los atributos son caracteristicas de los objetos, ej nombre


class Persona{
    nombre = 'Homero';
    apellido = 'Simpson';
    direccion = 'Av. Siempreviva 742';
    telefono = 5553472;
    email = 'amantedelacomida@aol.com';
    trabajar(){
        return 'Trabaja en la planta nuclear';
    }
    estudiar(){
        return 'Escuela primaria de Sprinfield'
    }
}

// Aca estamos definiendo un objeto, que tiene los atributos y métodos de Persona
const homero = new Persona();
const bart = new Persona();

document.write(homero.nombre + ' ' + homero.apellido); // Homero Simpson
document.write('<br>');
document.write(homero.trabajar());
document.write('<br>');
document.write('Bart ', bart.apellido); // Bart Simpson
