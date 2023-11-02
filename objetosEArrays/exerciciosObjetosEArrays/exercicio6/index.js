//Exercicio 6

//Crie dois arrays, um com mais de 5 elementos e outro com menos;

//Faça uma função que verifica o número de elementos.

//Se possuir menos que 5, imprima "Poucos elementos" no console;

//Se tiver mais, imprimi "Muitos elementos"

const arrayA = ["Passa tempo", "Paçoca", "Dadinho", "Dunk", "Sneackers", "Chocolicia"];

const ArrayB = [ 12, 17, 9, 15]



function teste(param){
    if(param.length < 5 ){
        console.log("Poucos elementos")
    }else{
        console.log("Muitos elementos")
    }
}


teste(arrayA)
