//Destructuring

//O destructuing é um recuso que pode ser utilizado em arrays e objetos;

//A ideia é transformar os itens de um desses dados em variáveis;

//Simplificando a declaração de n variáveis para apenas 1 linha;


const fruits = ["Maçã", 'Laranja', 'Mamão'];

const [f1, f2, f3] = fruits


console.log(f1)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "periférico",
    color: "Cinza"
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productDetails}, custa R${price} e pertence a category${productCategory} e é da cor ${color}`)

