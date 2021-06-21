//Construtora

function Pessoa(nome){
    this.nome=nome

    this.falar= function(){
        console.log(`Meu nome e ${this.nome}`)
    }
}

const pes1=new Pessoa("Ana")
pes1.falar
//Class
class pes{
    constructor(nome){//recebendo o parametro
    this.nome=nome
    }

    falar(){
       console.log(`Meu nome e ${this.nome}`) 
    }
}

const pes2=new pes("Pedro")
pes2.falar

/// funcao factory
const criarpessoa= nome=>{
    return{
        falar:()=>console.log(`Meu nome e ${nome}`)
    }
}

const p2=criarpessoa("Ana")

p2.falar()
//NOTES:A composicao this varia de acordo com o contexto que foi inserida
/*metodo sem arrow
const criarpessoa=function(nome){
    return{
        falar(){
            console.log(`Meu nome e ${nome}`)
        }
    }
}*/