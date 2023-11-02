//Exercicio 10

//Crie um Objeto calculadora

//QUE TENHA OS SEGUINTES MÉTODOS: somar, subtrair, multiplicar, e dividir

//Os métodos só devem aceitar dois parâmetros;

//Utilize cada um dos métodos e imprima os valores no console;

const calculadora = {
    soma: function(a, b){
        return a + b
    },
    subtrair: function(a, b){
        return a - b;
    },
    multiplicar: function(a, b){
        return a * b
    },
    dividir: function(a, b){
        return a / b
    }
}

console.log(calculadora.soma(3, 4))
console.log(calculadora.subtrair(5, 5))
console.log(calculadora.multiplicar(3, 4))
console.log(calculadora.dividir(3, 4))
