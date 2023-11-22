//  Classes

//O prototype do javaScript pode ser chamado de classe;

//Pois nas outras linguagens uma Class é um molde de um objetivo;

//Ou seja, podemos criar diversos objetivos em cima de um prototype;

let cachorro = {
    raca: 'SRD',
    patas: 4,
    latir: function(){
        console.log("Au Au")
    }
}


let labrador = Object.create(cachorro);

labrador.raca = 'Labrador';

console.log(pastorAlemao.raca);
console.log(cachorro.raca);

let pastor  = Object.create(cachorro);
pastor.raca = "Pastor alemão";


console.log(pastor.raca);