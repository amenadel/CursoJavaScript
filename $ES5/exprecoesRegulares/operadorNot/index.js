// Operador ^


//Podemos escrever um set que aceita tudo, menos alguns caracteres com o not

//Lembrando que combinações serão aceitas, o negado é apenas se bate com o set

//Mais adiante aprenderemos negar de outras formas


const notab= /[^ab]/

console.log(notab.test("a"))
console.log(notab.test("bnlkjdldj"))

const notaz = /[^a-z]/


