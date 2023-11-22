// Argumentos opcionais


//Podemos chamar uma função em js sem o número igual de parâmetros

function nomeComIdade(nome, idade) {
    if(idade === undefined)
    {
        console.log("Seu nome é" + nome)
    } else {
        console.log("Seu nome é"  + nome + "e você tem" +  idade)
    }

}


nomeComIdade("Arthur")
nomeComIdade("Arthur", 26)



//Argumentos com valores default

function potencia(base, exp=2){
    return Math.pow(base, exp);

}

console.log(potencia(2))

console.log(potencia(2, 2))

console.log(potencia(2, 3))


