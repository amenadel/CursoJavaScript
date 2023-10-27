//exercicio 04


//Escreva uma função que recebe o nome d euma pessoa;

//Se pessoa tem mais que 18 anos ela pode entrar na auto escola;

//imprima uma mensagem falando isso


function idade(idade){
    if( idade >= 18){
        console.log("Listo á execer o curso de CFCA")
    } else{
        console.log("Menor de idade, não pode fazer o curso")
    }
}



idade(15)
idade(21)

