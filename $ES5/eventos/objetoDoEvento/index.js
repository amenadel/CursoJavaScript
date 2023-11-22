// O objeto do evento

//Quando criamos eventos, temos a opção de utilizar um argumento opcional, que é chamado de objeto do evento;

//Ele contém propriedades que podem ser utilizadas a nosso favor

//O objeto é criado pelo JavaScript automaticamente


function msg(e){
    console.log(e)
}

btn.addEventListener("click", msg)

btn1.addEventListener("click", function(event){
    console.log(event)
})