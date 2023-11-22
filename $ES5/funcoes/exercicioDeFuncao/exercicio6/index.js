//exercicio 06


//Escreva uma função que detecta o tipo de dado passado;

//Verifique se é um: number, boolean ou string;

//E retorne uma mensagem para cada tipo;

//Execute uma função para cada caso;


function type(data){

    let resultado = typeof(data)

    console.log(`${data} é do tipo ${resultado}`)
}

type(1)
type("Arthur")
type(true)


// outra maneira

function data1(data1){

    if(typeof data1 === 'string'){
        console.log("Este dado é uma string");
    }else if(typeof data1 ==='number'){
        console.log("Este dado é number")
    }else if(typeof data1 === 'boolean'){
        console.log("Este dado é um boolean")
    }

}


data1(1)
data1("Bolo")
data1(true)
