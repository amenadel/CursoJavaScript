// Rejeitando Promises

//Além do resolve, há o metodo reject


//Que é quando determinada lógica não satisfaz nosso programa, então podemos ir para outra com rehect, em vez de resolve;

//Resolve e reject terminam a Promise, ou seja, não podemos chamar mais o then

function verificarAlgo(num){
    return new Promise((resolve, reject) =>{
        if(num == 2){
            resolve(console.log("O número é 2"))
        } else {
            reject(new Error("Falhou"))
        }

    })
}



