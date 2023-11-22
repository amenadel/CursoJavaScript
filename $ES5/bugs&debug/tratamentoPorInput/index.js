// Try & catch


// O bloco try catch, vai tentar executar um código, caso não consiga ele pode retornar o erro que esse código gerou;

// Muito útil para debug

let b = 2;

try{
    let c = a + b
} catch(error){
    console.log("Algo deu errado:" + error)
}