//Spread operator

//O Spread pode ser utilizado também em arrays e objetos

//Utilizamos para construir novo valores destes dados em outros arrays e objetos

//Ou seja, podemos unir vários arrays de maneira simples ou adicionar valores de um objeto a outro, por exemplo;

const a1 = [1, 2, 3]
const a2 = [4, 5 ,6]


const a3 =[...a1, ...a2]


console.log(a3)

const a4 = [0, ...a1, 4]


console.log(a4)

const otherInfos = {km: 100000, price:49000 }
const carBrand = {brand: 'vw'}
const carName = { name:'Gol'}

const car  = {...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car)