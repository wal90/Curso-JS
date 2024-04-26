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
        return '${this.nombre} - ${this.peso} kg. - ${this.edad} años \ - ${this.raza}';
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, edad, peso);
        this.sexo= sexo;
    }
    informacion(){
        return '${this.nombre} - ${this.peso} kg. - ${this.edad} años \ - ${this.sexo}';
    }
}