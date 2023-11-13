//Resolvendo Promises

//Com o método all, podemos resolver várias promessas de uma vez só;


//oU SEJA PASSAMOS ELAS POR ARRAY E QUANDO A ÚLTIMA FOR RESOLVIDA, recebemos a resposta

const p1 =  new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(100)
    }, 2500)
})

const p2 = Promise.resolve(5)

const p3 = new Promise(function(resolve, reject){
    resolve(10)
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))


