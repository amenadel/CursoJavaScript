// Escopo de uma função


//O que acontece dentro de uma função fica separado do escopo global;

//O escopo global seria todo o arquivo de javaScript



let n = 10;

const numero = function()
{
    let n = 25;
    console.log(n)
}

console.log(n)



//     ESCOPO DE FUNÇÕES: ESCOPO ANINHADO (nested scopes)


//POR CAUSA DA POSSIBILIDADE DE CRIAR UM ESCOPO, PODEMOS TER MAIS NÍVEIS DE ESCOPO;


let y = 5; 


const multiplicar = function(n)
{
    let y = n * 2;
    console.log(y) //escopo da função

    if(y == 10)
    {
        let y = 55;
        console.log(y) // escopo if dentro da função
    }
}


