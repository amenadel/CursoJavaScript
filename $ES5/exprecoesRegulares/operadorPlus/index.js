//Plus operator

// Quando um + está após alguma expressão, este elemento pode se repetir mais de uma vez


let muitosOuPoucosDigitos = /\d+/

console.log(muitosOuPoucosDigitos.test("123"))
console.log(muitosOuPoucosDigitos.test("123456789"))
console.log(muitosOuPoucosDigitos.test(""))