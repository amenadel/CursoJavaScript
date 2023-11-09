//Choice pattern

//Podemos colocar uma instrução na regex que funciona como um || (or) das condicionais


let frutas =  /\d+ (bananas|maçãs|laranja)/

console.log(frutas.test("10 bananas"))
console.log(frutas.test("25 batatas"))
console.log(frutas.test("8 laranjas"))