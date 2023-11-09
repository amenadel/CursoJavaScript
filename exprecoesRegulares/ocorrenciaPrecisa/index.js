//OcorrÊncia precisa

// inserir o número de ocorrência entre{ }


let telefone = /\d{4,5}-\d{4}/

console.log(telefone.test("4004-5050"))
console.log(telefone.test("99999-8080"))
console.log(telefone.test("999-999"))
console.log(telefone.test("999-9"))