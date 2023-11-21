//Encontrando elementos

//Podemos encontrar elementos de uma forma mais fácil do que se movendo pelo DOM.

//Como no HTML temos tags, classes & ids, o javaScript nos possibilita utilizar estas caracteristicas para encontrar oque desejamos;

//Há alguns métodos para isto:getElementsByTagName, getElementById getElementsByClassName, e também o querySelector;

//Vamos ver cada um deles em detalhes;

//Encontrando elementos: por tag

// Utilizamos o seguinte métodos para encontrar elementos pela tag:

//document.getElementByTagName("h1")



console.log(document.getElementsByTagName("h1"))

//Encontrando elementos por: ID

//Utilizamos o seguinte método para encontrar elementos por ID:

//document.getElementById

console.log(document.getElementById("algum-id"))


//Encontrando elementos: por class

document.getElementsByClassName("Alguma-classe")



//Encontrando elementos: por query

//Um método que se assemelha a grande funcionalidade do jQuery;

//Nos permitindo encontrar elementos pelo seus seletores de CSS;

//O que facilita muito nosssa vida, veja: 


console.log(document.querySelector("#algum-id"))
console.log(document.querySelector(".teste"))
console.log(document.querySelector("h1"))






