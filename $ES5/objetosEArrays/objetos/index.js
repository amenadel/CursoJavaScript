//Objetos

// Uma coleção de propriedades, parecido com arrays
//Podemos acessar estars propriedades

let pessoa = {
    nome:"Arthur",
    profissao:"Programador",
    idade: 28, 
}

console.log(pessoa.nome)
console.log(pessoa.idade)

//Objetos: deletando e criando propriedades

//Podemos adiconar e deletar propriedades ao longo do nosso programa

let carro = {
    Marca: "VW",
    portas: 4,
    eletrico: false,
    motor: 1.0
}

console.log(carro.portas);
delete carro.portas;

carro.tetoSolar = true;


console.log(carro.tetoSolar)
    
    
    
//Objetos: mais sobre objetos

//Podemos copiar todas as propriedades de objetos para outro;

let objetoA = { 
    prop1: 'teste',
    prop2: 'testando',
}

let objetoB = {
    prop3: 'propriedade'
}

Object.assign(objetoA, objetoB)

console.log(objetoA)



//Objeto: mais sobre objetos

//E Também podemos verificar quais as chaves cada objeto possui;

let objetivoA = {
    prop1: 'teste',
    prop2:'testando',
}

console.log(Object.keys(objetoA));

//Mutação (mutability);

//Um objeto pode herdar todas as características do outro, virando uma refderencia ao mesmo;

let objetoX = {
    pontos: 10,
};

let objetoY = objetoX

let objetoZ = {
    pontos: 10,
}

console.log(objetoX == objetoY);

console.log(objetoX == objetoZ);

