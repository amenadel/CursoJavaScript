//Método exec

//O método exec nos retorna um objeto com algumas informações sobre o regex

//Se nada for encontrado, retorna null

let teste = /\d+/.exec("O numero 100")

console.log(teste)
console.log(teste.index)