console.log(soma(1,2))// function declaration:javan carrega primeiro as function declaration antes de iniciar o codigo
function soma(x,y){
    return x+y
}

//function expression:função anonima
const soma1=function(x,y){
    return x+y
}

//named function expression:desse modo vai aparerecer o nome da função
const mult= function mult(x,y){
    return x*y
}

//function with arrow
soma2= (x,y) =>{ return x+y} 
console.log(soma2(10,3))