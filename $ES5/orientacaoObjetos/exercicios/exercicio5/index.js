//Exercício 05

//Crie uma classe conta bancaria;

//com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança;

//Crie os métodos de depósito e saque, também um método para transferir dinheiro da poupança;

//Crie ps métodos de depósito e saque, também um método para transferir dinheiro da poupança para a corrente;

//Além disso crie uma conta especial que herda da conta normal

//Na conta especial os juros sao dobrados da conta normal


class Conta {
    constructor(saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC
        this.saldoCP = saldoCP
        this.juros =  juros
    }

    deposito(valor){
        this.saldoCC -= valor;
    }

    saque(valor){
        this.saldoCC -= valor;
    }


    tranferenciaCP(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }


    transferenciaCC(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }

    jurosDeAniversario(){
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }
}

class ContaEspecial extends Conta{
    constructor(saldoCC, saldoCP, juros){
        super(saldoCC, saldoCP, juros*2)
    }
}

let conta = new Conta(1000, 5000, 1);

console.log(conta);

conta.saque = 500;

console.log(conta);

conta.deposito(5000);

console.log(conta);

conta.tranferenciaCP(3000);

console.log(conta);

conta.jurosDeAniversario();

console.log(conta);

let conta2 =  new ContaEspecial(10000, 50000, 1);

console.log(conta2);

conta2.saque(5000)

conta2.jurosDeAniversario()
console.log(conta2)
