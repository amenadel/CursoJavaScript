// operador?


//Faz com que o dígito anterior seja opcional


let opcional = /Prova\s?\d?/


console.log(opcional.test("Prova"))
console.log(opcional.test("Prova 2"))
console.log(opcional.test("Prova 3"))


