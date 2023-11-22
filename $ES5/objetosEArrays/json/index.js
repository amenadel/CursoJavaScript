//JSON = Java Script Object Notation

//Utilizado para a comunicação entre serviços, ex: back end <-> front end

//Basicamente um tipo de dado padronizado, que lembra muitos os objetos do javaScript


let pessoa ={
    "name": "Arthur Menadel",
    "age": 26,
    "position": "Developer",
    "Languages": ["PHP","Java Script", "Python"]

}


//Rigoroso na estrutura, ou seja, você deve seguir o padrão imposto por este formato;


//Apenas aspas duplas;

//Não aceita comentários;



//JSON para String

//Podemos converter o Json para uma string de forma Fácil;

//Ou também uma  string para Json;

const car = {
    "brand" : "BMW",
    "wheels": 4,
    "doors": 2,
    "type": "Sedan"
}

let jsonToString = JSON.stringify(car)

console.log(jsonToString)

let stringToJson = JSON.parse(jsonToString)

console.log(stringToJson)