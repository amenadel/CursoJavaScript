//Express

//Um framework web, muito utilizado para criar aplicações em node.js//

//Utiliza em seu core o módulo HTTP para criar as comunicações 

//Além de outros módulos

//Podemos criar uma API com express facilmente


//Instalando o Express

//O express precisa ser instalado

//Então vamos instalar pelo npm e criar um projeto novo 

//npm init

//npm install express

//O Express será instalado e adicionado as dependências do nosso projeto


let express = require('express')
let app = express()

app.get('/', function(req, res){
    res.send('Primeira rota com express')
})


app.listen(3000, function(){
    console.log("A aplicação está funcionando na porta 3000")
});
