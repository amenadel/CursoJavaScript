//classes

//As classes são recursos fundamentais para programar com orientação a objetos;

//Agora o JS tem este recyrso implementado, onde temos acesso a: constructor, propriedades, método e mais

//Antes as classes era baseadas em funções (constructor functions);


class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWuthDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }

}

const shirt = new Product("Camisa gola V", 20)


console.log(shirt.name)


console.log(shirt.productWuthDiscount(50))
