function getpre(imposto=0,moeda="R$"){
    return `${moeda} ${this.preco*(1-this.desc)*(1+imposto)}`
}

const produto={
    nome:'not',
    preco:400,
    desc:0.15,
    getpre
}


console.log(getpre())
console.log(getpre().produto)
console.log(produto.getpre())

const carro ={preco:2000,desc:0.1}
console.log(getpre.call(carro))//uso do call
console.log(getpre.apply(carro))//APPLY 



console.log(getpre.apply(carro,[0.17,"R$"]))//Apply e preciso do nome, define dentro de um array
console.log(getpre.call(produto,0.15,"$"))//call nao precisa de array,mas precisa tambem de um parametro como nome


