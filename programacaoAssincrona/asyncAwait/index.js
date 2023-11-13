//Promises


//As promises são ações assíncronas que podem produzir um valor em algum momento no código

//Umas forma de dizer a linguagem que um valor pode estar presente em um futuro do código

//OObjeto das promises é Promise, resolve é o método que resolve uma Promise, o then é o que faz ela pode ser executada em um ponto futuro


let promessa = Promise.resolve(4 + 8)

 console.log("Algum código")

 promessa.then((value) => console.log(`A soma é ${value}`))
 