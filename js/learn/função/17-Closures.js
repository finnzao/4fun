//Closure é o escopo criado quando uma função é declarado
//Esse escopo permite a função acessar e manipular vairaveis externas a função

//Contexto lexico em ação

const x='Global'

function fora(){
    const x="local"
    function dentro(){
        return x
    }
    return dentro
}

console.log(fora())
const fun= fora()
console.log(fun())//ficou gravada o local no qual a função foi criada