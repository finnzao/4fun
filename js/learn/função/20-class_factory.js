class pes{
    constructor(nome){
        this.nome=nome//estanciando
    }
    falar(){
    console.log(`Meu nome e ${this.nome} `)
    }
}
new pes("joao").falar()

const pes0=new pes("Joao")
pes0.falar()



function Pessoa(nome){
    this.nome=nome

    this.falar= function(nome){
        console.log(`Meu nome e ${this.nome}`)
    }
}

new Pessoa("pedro").falar()

const pes1=new Pessoa("Pedro")///estanziamos
pes1.falar()



/// funcao factory
const criarpessoa= nome=>{
    return{
        falar:()=>console.log(`Meu nome e ${nome}`)////()=> function void
    }
}
criarpessoa("maria").falar()


//NOTES:A composicao this varia de acordo com o contexto que foi inserida
/*metodo sem arrow
const criarpessoa=function(nome){
    return{
        falar(){
            console.log(`Meu nome e ${nome}`)
        }
    }
}*/