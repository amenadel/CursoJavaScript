// Oque é bug & debug

//Bug: Problema que ocorre no código, muitas vezes por erro do programador, que impede o funcionamento correto do código;

//Debug: O Ato de resolver os bugs encontrados no código ou também a forma que é feita a visualização de valores de variáveis ou fluxo do código;


let a = 1
let b = 2 
let c = 3 

if(c > a){
    a = b
    debugger
}


for (let i = 5;  i > 0; i--){
    b++
    a = a + c + 1

    c += 2;

    debugger
}
if(b == a){
    a++
} else {
    a = a + b + c
}


debugger

a = a * b

debugger