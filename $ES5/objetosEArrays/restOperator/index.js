// Métodos de ARRAY rest operator


//Uma forma de uma função receber indefinidos parâmetros;

//O operador rest vai virar um array;

//O parâmetro é definidopor:...nome

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

