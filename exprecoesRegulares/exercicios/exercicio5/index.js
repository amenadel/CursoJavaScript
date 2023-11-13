//Exercicio 05

//Crie um regex que valide nome de usuarios no sistema

//aceita letras de a-z, _e-, números de 0-9, mínimo de 3 caracteres e maximo de 16;

//Depois teste

let validarNomeUsuario = /^(?=.{3,16}$[a-z0-9-_])/


console.log(validarNomeUsuario.test("menadel21"))