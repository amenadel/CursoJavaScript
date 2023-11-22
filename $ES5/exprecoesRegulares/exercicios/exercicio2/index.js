//Exercicio 2

//Crie uma regex que só aceite string terminadas com id's


const validarId = /\d+ID\b/


console.log(validarId.test("384284ID"))

