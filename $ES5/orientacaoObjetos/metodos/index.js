// Métodos

//Propriedades que servem como funções;

// Ou seja, as ações dos objetos;

//Invocamos os métodos da mesma maneira que funções


let gato = {
    miar: function(){
        console.log("Méeéééun")
    }
}


gato.miar()


//Mais sobre Métodos

//Normalmente os métodos interagem com os objetos;

//Até mudando os valores das suas propriedades para corresponder a lógica do programa desenvolvido;

let pessoa = {

    nome: '',
    setNome: function(novoNome){
        this.nome = novoNome
    },
    getNome: function(){
        return this.nome;
    }
}

pessoa.setNome("Arthur")

console.log(pessoa.getNome());

