function rand({min=0,max=1000}){
    const valor=Math.random() *(max -min)+min
    return Math.floor(valor)
}

console.log(rand({min:900,max:2000}))
console.log(rand({}))////criamos a estrutura mãe,logo o max e min podem existir
//console.log(rand())///não criamos o objeto ,logo max e min nao podem ser aplicados
