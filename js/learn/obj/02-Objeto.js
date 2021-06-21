//colecao dinamica de pares chave/valor

const produto=new Object
produto.nome='Vaso'
produto["marca do produto"]='Generica'
produto.preco=200

console.log(produto)

delete produto.preco
delete produto["marca do produto"]
console.log(produto)


const loja={
    tipo:"A",
    valor:3000,
    proprietario:{
        nome:'Raul',
        idade:50,
        endereco:{
            logradouro:'Rua ABC',
            numero:123,
        }
    },
    Func:[{
        nome:"Ana",
        idade:30,
    },{
        nome:'Pedro',
        idade:20
    }],
    cal:function(){
        if (idade<25){
            loja.menores=idade
        }
    }
}
loja.proprietario.endereco.logradouro="Rua DEF"
delete loja.Func


console.log(loja.Func)///vai retornar UNDEFINED
//console.log(loja.Func.length)///ira dar erro,pois acessar algo que estar indefinido vai dar erro