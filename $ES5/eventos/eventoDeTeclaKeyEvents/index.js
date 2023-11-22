// Eventos de teclas ( key event )

//Sempre que uma tecla é pressionada, são gerados dois eventos

//keyup & keydown

// Podemos realizar ações nestes eventos também;

//Keyup é quando soltamos a tecla

//Keydown é quando apertamos

window.addEventListener("keydown", function(e){
    if(e.key == "v"){
        console.log("Apertou a letra V")
    }    
})