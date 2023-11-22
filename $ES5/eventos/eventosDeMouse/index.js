// Outros eventos de mouse;

//No mouse temos também eventos como mousedown e mouseup, semelhante aos das teclas;

//Dblclick para ativar com dois cliques;


btn = document.querySelector("button");

btn.addEventListener("dblclick", function(){
    console.log("Ativou com double click");
});