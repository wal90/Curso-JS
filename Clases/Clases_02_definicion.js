class Papel{ // clase Papel que sirve para crear nuevos papeles
    constructor(alto, ancho){ // es un constructor dentro de un obj de una clase
        this.alto = alto;
        this.ancho = ancho;
    }
}

let mipapel = new Papel(4,5) // obj Papel a traves de una instancia de Papel

let Papel_A = class{ // Clase anonima porque no tiene un nombre la clase
    constructor(alto, ancho){ 
        this.alto = alto;
        this.ancho = ancho;
    }
}

let Papel_B = class Papelx{ 
    constructor(alto, ancho){ 
        this.alto = alto;
        this.ancho = ancho;
    }
}