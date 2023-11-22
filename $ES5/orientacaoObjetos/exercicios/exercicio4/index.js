//Exercício 04


//Crie uma classe qie simule um carro;

//Propriedades: marca, cor, gasolina restante;

//Crie uma método de dirigir o carro, que vá diminuindo a gasolina gradativamente;

//E um de abastecer para aumentar a gasolina quando necessario;


class Carro {

    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca
        this.cor = cor 
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }

    dirigir(km){
        let litrosConsumidos = km / this.consumo

        this.gasolinaRestante -=  litrosConsumidos
    }

    abastecer(l){
        this.gasolinaRestante += 1
    }


}

let carro =  new Carro("VW", "Cinza", 100, 14)

console.log(carro)

carro.dirigir(100)

console.log(carro)

carro.abastecer(10)

console.log(carro)