// Override nas propriedades do prototype

//Sempre que adicionamos uma propriedade a um Objeto, é criada uma identica em prototype

class Cachorro { 
    constructor(raca, cor)
    {
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au au")
    }

}

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;

let lebrador = new Cachorro('labrador', "Amarelo")

console.log(labrador.patas)


labrador.latir()

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)

