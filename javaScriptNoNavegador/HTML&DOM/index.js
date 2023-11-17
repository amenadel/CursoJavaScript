//A  estrutura HTML e o DOM 

//Quando uma página web é requisitada, ela recebe um texto que é transformado em uma estrutura HTML.

//As tags vão se aninhado uma às outras, formando uma estrutura em que elementos ficam dentro dos outros.

//Essa estrutura tem uma representação exatamente igual para o JS chamada DOM.

//E por meio do JS podemos acessar cada um destes elementos do HTML através do DOM.

// O DOM

// Podemos mudar complestamente uma página HTML através do DOM;

//É possí alterar: elementos, atributos, CSS;

//Além de alterar podemos adicionar e também remover;

//Além de ser possível criar eventos na página, como animações;


console.log(document)
//acessa pasta index.html do navegador


//  A árvore do DOM

// O documento HTML seria a árvore completa

// A raiz da árvore é o Documenta(só a uma raiz);

//Cada elemento da árvore chamamos de node(nó)

//Conteúdos como texto são chamados de leaf nodes (as folhas)


//Movendo-se através do DOM

//Podemos acessar todos os elementos a partir de document.body

//E DEPOIS ACESSANDO AS PROPRIEDADES QUE NOS INTERESSAM 

console.log(document.body);

console.log(document.body.childNodes)
console.log(document.body.childNodes[1].childNodes[1])
console.log(document.body.childNodes[1].textContent[1].textContent)



