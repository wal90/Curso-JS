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