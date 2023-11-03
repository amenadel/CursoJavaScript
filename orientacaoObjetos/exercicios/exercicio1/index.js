//Exercício 01
//Crie uma classe que simula uma conta no banco(utilize a forma que preferir)

//Deve conter a propriedade saldo

//E os métodos deposito e saque

//Teste os metodos


class Bank{
    constructor(saldo){
        this.saldo = saldo
    }

    deposito(valor){
        this.saldo += valor
    }

    saque(valor){
        this.saldo -= valor
    }

}

let conta = new Bank(1000)

conta.deposito(1000)

console.log(conta.saldo)

conta.saque(500)

console.log(conta.saldo)

conta.saque(500)

console.log(conta.saldo)