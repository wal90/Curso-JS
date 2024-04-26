class Animal {
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    informacion(){
        return '${this.nombre} - ${this.peso} kg. - ${this.edad} años';
    }
}

class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, edad, peso);
        this.raza = raza;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años \ - ${this.raza}`;
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, edad, peso);
        this.sexo= sexo;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años \ - ${this.sexo}`;
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, edad, peso);
        this.color = color;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años \ - ${this.color}`;
    }
}

let perro1 = new Perro('Clifford', 12, 3, 'Doberman' );
let gato1 = new Gato('Misifus', 5, 2, 'Masculino');
let conejo1 = new Conejo('Bugs', 3, 1, 'Blanco');

let animales = [perro1, gato1, conejo1];

function mostrarAnimales(){
    let lista = document.getElementById('listaAnimales');

    for(let animal of animales){
        let item = document.createElement('li'); // item para agregarlo a la lista
        item.innerText = animal.informacion(); // que tenga un texto interno, es un string con info
        lista.appendChild(item); //llamo a la lista con un hijo q sea el item
    }
}