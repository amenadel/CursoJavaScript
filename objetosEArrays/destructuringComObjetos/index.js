//Destructuring com objetos


//Podemos definir variáveis com propriedades do objeto com uma notação diferente, chamada destructuring


const person = {
    name:'Jhon',
    lastname: 'Doe'
}

const {name: fname, lastname: lname} = person


console.log(fname);
console.log(lname);