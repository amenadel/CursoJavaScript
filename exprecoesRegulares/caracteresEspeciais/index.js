//Caracteres Especiais

// \d - Qualquer dígito de caractere
// \w - Um caractere alfanumérico("teste")
// \s - Qualquer caractere de espaço em branco
// \D - cARACTERES QUE NÃO SÃO DIGITOS
// \W -  Caractere não-numericos
// \S - Caractere que não seja espaço em branco
// . - Qualquer caractere, menos nova linha.
const pontoRegex = /./

console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(""))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("123sad"))

const dRegex = /\d/ // [0-9]

console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(""))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("123sad"))

const DRegex = /\D/ // [^0-9]

console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(""))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("123sad"))

const sRegex = /\s/ // [0-9]

console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(""))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("123sad"))