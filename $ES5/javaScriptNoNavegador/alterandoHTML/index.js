//Alterando o HTML

//Podemos mudar quase tudo da DOM

//Podemos utilizar métodos como:insertBefore, appendChild e replaceChild

//Vamor ver em detalhes como utilizar cada um deles





//Alterando a DOM com insertBefore

//Insere um nó antes do nó de referencia do método

//Precisamos de um elemento para ser adicionado

//O elemento que terá o outro elemento adicionado antes dele

//E o elemento pai destes dois




let span  = document.createElement("span")
let el =  document.querySelector("h1")
let pai =  el.parentNode

pai.insertBefore(span, el)





//Alterando a DOM com appendChild

//Adiciona um após todos os elementos do elemento pai especificado


let p = document.createElement("p")
let el2 = document.querySelector("h1")
let pai2 = el2.parentNode


pai2.appendChild(p)




//Alterando a DOM com replaceChild

let newHeading = document.createElement("h1")
newHeading.textContent = "Novo texto"

let oldHeading = document.getElementById("old-heading")

let pai3 = oldHeading.parentNode

pai3.replaceChild(newHeading, oldHeading)


//Criando nós de texto

//Podemos criar um nó de texto puro e inserir em um elemento

let textox = document.createTextNode("Este é o texto")

let pi = document.getElementById("P-sem-texto") 

pi.appendChild(textox)



//Podemos criar um nó de elemento com o createElement, e depois inserir no HTML

let span2 =  document.createElement("span")
let el3 = document.querySelector("h1")
let pai4 = el3.parentNode;

pai4.insertBefore(span, el)







//Modificando e lendo atributos

//Podemos resgatar o valor de um atributo ou trocar com o JS

//Por exemplo o href de um a ou o src de um elemento img;

//getAttribute pegar o valor;

//setAttribute atualiza o valor;


let url = document.getElementById("link")
console.log(url.getAttribute('href'));

url.setAttribute("href", "www.horadecodar.com.br");
console.log(url.getAttribute("href"))





