//  Classes: construtor por Métodos

// Alem de propriedades, podemos criar a classe ja com métodos;

// Basta definir ao prototype o método desejado


function Cachorro(raca){
    this.raca = raca; 

}

Cachorro.prototype.uivar = function(){
    console.log("aiii ze da manga")
}

let pug = new Cachorro("Pug");

console.log(pug.raca);
pug.uivar()