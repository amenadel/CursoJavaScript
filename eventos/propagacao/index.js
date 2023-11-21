// Propagação

// Quando não definimos um elemento muito bem (seletor brando) ou um elemento que está dentro de outro tem um evento;

// Pode acontecer a propagação, ou seja, o outro elemento ativar um evento também, aí teremos uma duplicação;

//Por isso temos um métodos que para esta propagação e resolve este problema, o stopPropagation


let p = document.querySelector('p')
let btn = document.querySelector('button')

p.addEventListener("click",function(){
    console.log("click 1")
    p.stopPropagation()
})

btn.addEventListener("click", function() {
    console.log("click 2")
})