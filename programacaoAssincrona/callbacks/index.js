//Uma das vertentes a programação assíncrona é fazer ações que aconteçam depois de um tempo por meio de callbacks

// Callback é uma função que faz uma ação após  algum acontecimento no código;

//Podemos realizar um callback com a função setTimeout, 

console.log("Ainda não chamou o callback")

setTimeout(function(){
    console.log("Chamou o callback")
}, 2000)

console.log("Ainda não chamou o call back")

