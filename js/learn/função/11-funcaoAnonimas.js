//quando atribuimos uma função atraves de um parametro 

const soma = function(x,y){
    return x+y
}

const imprimirResultado= function(a,b,operacao=soma){///marcamos como padrão a operacao ser soma
    console.log(operacao(a,b))
}   
console.log(soma(1,2))
imprimirResultado(3,4)
imprimirResultado(3,4,soma)///mostramos resultado sem digita log
imprimirResultado(3,4,function(x,y){
    return x-y
})
 