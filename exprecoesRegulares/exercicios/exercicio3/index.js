//Exercicio 3

//cRIE UMA REGEX QUE ACEITE A SEGUINTE EXPRESSÃO "marca: NOME da marca"

//onde nomeDaMarca pode variar para nike, Adidas, Puma, Asics;

//Depois teste 

const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(validaMarca.test("Marca: Nike"));


