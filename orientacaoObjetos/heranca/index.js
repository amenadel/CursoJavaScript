// Symbols

//Uma classe pode herdar propiedades de outra classe por herança


class Mamifero { 
    constructor(patas){
        this.patas = patas
    }
}

class Cachorro extends Mamifero {
    constructor(patas, raca){
        super(patas, raca)
        this.raca = raca
    }
}

let pug = new Cachorro(4, 'Pug');

console.log(pug)