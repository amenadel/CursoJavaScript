//Async Await

//Nas async functions, podemos determinar uma instrução await;


//Que vai esperar uma promise ser resolvidade, para apresentar os resultados


function somaComDelay(a, b){
    
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a + b);
        }, 2000);
    });
}

async function soma(a,b,c,d){

    let x = somaComDelay(a, b)
    let y = somaComDelay(c, d)

    return await x + await y
}






