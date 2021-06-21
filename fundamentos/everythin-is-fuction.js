/*console.log(typeof Object)///letra maiscula é o tipo da variavel
console.log(typeof object)

class Produto {}
console.log(typeof Produto)

//função é definida por um bloco{} que tem dados do que vai fazer*/

function imprimirSoma(a,b){
    console.log(a+b )
}



imprimirSoma(1,2)
imprimirSoma(2)/// NaN = Not a Number
imprimirSoma(1,7,131310,3131)///Irá usar apenas os dois primeiros parâmetros


function soma(x=0,y=0){
    return x + y
}
soma(29,3)
console.log(soma(20,20))