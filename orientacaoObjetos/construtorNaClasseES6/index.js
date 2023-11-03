//  Construtor na classe (es6)

//Com a versão do ES6, uma possibilidade de criar uma classe(objeto) com construtot foi adcionada;

//ntão não precisamos mais criar por meio de uma função


class Cachorro{
    constructor(raca){
        this.raca = raca;
    }
}

let labrador = new Cachorro('Labrador')


console.log(labrador.raca)