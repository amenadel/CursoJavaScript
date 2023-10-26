// Escopo de uma função

    // Arrow Functions


    //Uma outra forma de escrever funções;

    //Bem utilizada nos frameworks modernos;

    //Porém não deve substituir as functions por completo (veremos mais tarde os detalhes);


    const parOuImpar = (n) =>{
        return n % 2;
    };

    console.log(parOuImpar(3));


    //Mais sobre Arrow Functions

    //Se só tem um parâmetro podemos remover os parenteses do argumento e  o return;
    
    //Se a expressão for pequena, pode até ser feita em uma linha sem prejudicar a leitura do código;


    const raizQuadrada = (x) => {
        return x * x;
    }

    const raizQuadrada2 = n =>  n * n

    console.log(raizQuadrada(2));
    console.log(raizQuadrada2(4));
    
