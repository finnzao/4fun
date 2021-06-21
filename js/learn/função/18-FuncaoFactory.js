const prod1 ={
    name:"...",
    preco:45
}

const prdo2={
    name:'..',
    preco:45
}

//Factory simples
function criar(){
    return{
        name:'...',
        preco:45
    }
}

console.log(criar())

function criarproduto(nome,preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
}

console.log(criarproduto(Ana,2000))