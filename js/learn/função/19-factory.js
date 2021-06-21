//funcao factory funcao que retorna um obj

function cadastrar(name,prec){
    desc=prec*0.1
    return{
    name,
    prec,
    desc
    }
}

console.log(cadastrar("ANAS",20))
