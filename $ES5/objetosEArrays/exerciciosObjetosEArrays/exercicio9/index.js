//Exercicio 9

//Crie um array a partir de uma frase;

//Imprima cada palavra do array no console por meio de um for

const frase = "Nesse exato momento a bea esta fazendo um café pra mim";
const fazerArray =  frase.split(" ")

for(let i = 0; i < fazerArray.length; i++)
{
    console.log(fazerArray[i])
   
}