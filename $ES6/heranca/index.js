//Herança

//Podemos criar herança de classes com ES6 também;

//Utilizamos a palavra extends para referira classe herdada;

//E as propriedades que utilizamos dela, devem ser enviadas via função super;

class productWithAttributes extends Product{
    constructor(name,price,color){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}


const hat = productWithAttributes("chapeu", 20.99, ["preto", "azul", "verde"])

console.log(hat.name)