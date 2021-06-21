const imprimir= function(a,b){
    console.log(a+b)
}

imprimir(2,6)

//armazenando uma função arrow em variavel:a seta substitui a palavra "function"
const soma=(a,b) =>{
    return a+b
}

console.log(soma(10,20))

///retorno implícito

const subs= (x,y) => x - y

console.log(subs(3,2))

subs(3,2)

/////////evitar varias