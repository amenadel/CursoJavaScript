// Evento por foco

//Quando focamos em um elemento ou saímos dele, podemos também atrelar um evento a esta ação;

//Focus para quando um elemento recebe foco e blur quando perde


let input  = documento.querySelector("input");

input.addEventListener("focus", function(){
    console.log("foco no input");
})

input.addEventListener("blur", function(){
    console.log("perdeu o foco")
})