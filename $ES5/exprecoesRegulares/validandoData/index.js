//validando: Data de nascimento


//Da seguinte forma, podemos validar uma data de nascimento;

let validarDataDeNascimento = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/


console.log(validarDataDeNascimento.test('25/12/2015'))
console.log(validarDataDeNascimento.test('25/12/15'))
console.log(validarDataDeNascimento.test('5/2/2015'))
console.log(validarDataDeNascimento.test('30/02/1997'))

