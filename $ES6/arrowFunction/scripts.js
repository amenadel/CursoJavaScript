//Arrow function

//A arroe function é um recurso para criar funções de forma mais simples mas ela não funcitona exatamente como uma function em todos os aspectos;

//O this da arrow function é relacionado ao elemento pai de quem está a executando

const sum = function sum(a, b){
    return a + b
}

const arrowSum = (a, b) => {
    return a + b
}


console.log(sum(5, 5))
console.log(arrowSum(5, 5))

