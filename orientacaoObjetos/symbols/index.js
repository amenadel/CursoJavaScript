// Symbols

//Prorpiedade única, que não podem ser alteradas e nem criadas duas vezes;


class Cachorro{
    contructor(raca){
        this.raca = raca
    }

    
}

let patas = Symbol();

Cachorro.prototype[patas] = 4; 

let golden = new Cachorro