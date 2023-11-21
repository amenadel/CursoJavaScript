// Ações Default


//Muitos elementos/teclas ja tem ações pre-definidas, como clicar num link nos leva a outra pagina

//Podemos para este evento default, e criar uma lógica diferente para o elemento em questão;

let a = document.querySelector("a")

a.addEventListener("click", function(e){
    e.preventDefault()
    console.log("clicou mas nao mudou de link")
})

