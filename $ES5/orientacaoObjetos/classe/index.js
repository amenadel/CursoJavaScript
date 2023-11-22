//  Prototypes 

// Quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procurada no prototype deste objeto;

//O prototype de um objeto criado do zero é o Object, que tem os métodos nativos da linguagem;


let pessoa = { 
    maos: 2 
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) == Object.prototype)


//Mais sobre Prototypes

//Quando criamos um Objeto a partir de um outro, o base será o prototype;

//Ele herdará tanto os métodos e propriedades de Object(o prototype do objeto base);

//Quanto os do objeto base para este novo;

let pessoa1 = {
    maos: 2
}

let pessoaNova = Object.create(pessoa1);

console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa)
