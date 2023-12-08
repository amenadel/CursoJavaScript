//Filter

//O filter é um método de array para filtrar dados, baseado em alguma condição que estabelecemos;

//Isso nos dá um array com apenas os elementos que queremos, de forma performática;

//Há vários métodos de array importantes no ES6, este é um deles;

const arr = [1, 2, 3, 4, 5]

const highNumbers =  arr.filter((n) => {
    if(n >= 3){
        return n
    }
})
console.log(highNumbers)


const users = [{name: "Matheus", available: true},
              {name: "Arthur", available: true},
              {name: "Beatriz", available: true},
              {name: "Genaro", available: true},
             ]


const availableUser =  users.filter((user) => user.available)

console.log(availableUser)