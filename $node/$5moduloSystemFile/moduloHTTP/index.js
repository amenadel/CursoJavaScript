//Módulo Http

//  Outro módulo muito utilizado, para fazer comunicação com http

// O Módulo já vem com Node;

//Pode criar um servidor que serve páginas web para nós

const { createServer } = require('http')

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(`
        <h1>Heloo world</h1>
    `)
    response.end()
})

server.listen(8000)

console.log("listening! { (port 8000)}" )