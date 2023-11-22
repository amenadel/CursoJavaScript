//exercicio 08

//Escreva uma função que recebe uma string;

//Se o texto conter mais de 10caractere imprima "Texto muito Longo"

//Se conter menos, imprima "Texto dentro do limite";

function input(dado){
    if(dado.length > 10 ){
        console.log("Limite exedido");
    }else if (dado.lenght <= 10){
        console.log("Dentro dos padrões");
    }else if(dado.length < 4){
        console.log("O nome precisa de mais digitos")
    }
}

input("arthur")
input("ART")
input("Arthur Menadel Alves de Campos")