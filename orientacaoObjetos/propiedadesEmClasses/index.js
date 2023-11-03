//  Propriedades em classes

//Não podemos adicionar propriedades na classes, só via prototype;

//Aclasse só aceita métodos

class Cachorro{
    contructor(raca){
        this.raca = raca
    }

    latir(){
        console.log("Au au");
    }
}


Cachorro.prototype.patas = 4;

let labrador =  new Cachorro("Labrador", "Amarelo");

console.log(labrador.patas)

labrador.latir()

