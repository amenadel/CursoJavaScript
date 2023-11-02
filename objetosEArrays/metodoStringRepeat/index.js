// Métodos de string: join

//junta elementos em um array em uma frase, por meio de um separador


let frase = "Testando p método split";

let palavras =  frase.split(" ");

let novaFrase = palavras.join("@");


console.log(novaFrase);