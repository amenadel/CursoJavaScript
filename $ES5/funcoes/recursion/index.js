// Recursion

//Uma funcionalidade que permite uma função se chamar novamente;

//Isso pode ser um problema caso a função se chame muitas vezes



function retornarNumeroPar(n){
    if(n % 2 == 0)
    {
        console.log("N agora é par: " + n)
    } else { 
        console.log(n)
        retornarNumeroPar(n - 1);
    }
}

retornarNumeroPar(33);