//Eventos por scroll

//Podemos atrelar evento ao scroll da tela também, pelo evento scroll;

//Por exemplo: podemos criar um elemento assim que o scroll atingir uma posição X;


window.addEventListener('scroll', function(e){
    if(this.window.pageYOffset > 100){
        console.log("Chegou na posição")
    }
})