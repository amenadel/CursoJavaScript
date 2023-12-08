//Map é um método de array também, que percorre todos os elementos

//Quando utilizamos Map, estamos querendo modificar os dados do array;

//Há vários métodos de array importantes no ES6, este é um deles;

const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 400.00, category: 'Eletro'},
    {name: 'Calça jeans', price: 10.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas'){
        product.onSale = true
    }
})