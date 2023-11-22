//Removendo eventos

//Da mesma forma que podemos adicionar eventos, podemos remover quando acharmos necessário;

//Para isso utilizamos o método removeEventListener, onde passamos o evento e a função que o evento esta escutando



let btn = document.querySelector("#btn")

function msg(){
    console.log("Clicou")
}


btn.addEventListener("click", msg);

setTimeout(function(){
    btn.removeEventListener("click", msg)
}, 3000)