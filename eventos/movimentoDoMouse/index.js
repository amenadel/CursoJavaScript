// Movimento do mouse


//Podemos ativar eventos com a movimentação do mouse também

//O nome dele é mousemove;

//Através desse evento podemos detectar a posição do ponteiro do mouse na tela;


windown.addEventListener("mousemove", function(e){
    console.log(e.x)
    console.log(e.y)
})