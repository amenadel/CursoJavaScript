//Módulo de file System


//Um dos módulos mais utilizados;


//Ele serve para trabalhar com arquivos e diretórios

//Já é incluso no node, ou seja não precisamos instalar


let { readFile, writeFile } = Require("fs")


readFile("arquivo.txt", "utf8", (error, texto) =>{
    if(error){
        throw error;
    } else {
        console.log(texto);
    }

})



//file System : escrevendo

//Além de ler arquivos, podemos também alterar o mesmo;

//Chamamos isso de escrever no arquivo

writeFile("arquivo.txt", "Inserir este texto", (error) =>{
    if(error){
        console.log(error)
    } else {
        console.log("Escreveu no arquivo")
    }
})