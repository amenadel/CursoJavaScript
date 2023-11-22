//Operador question ? 



//Faz com que o dígito anterior seja opcional
let optional = /Prova\s?\d?/

console.log(optional.test("Prova"))
console.log(optional.test("Prova 1"))
console.log(optional.test("Prova 2"))


const padrao  = /Abacax?i/

console.log(padrao.test("Abacaxi"))
console.log(padrao.test("Abacai"))