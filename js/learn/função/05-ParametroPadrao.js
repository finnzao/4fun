function soma1(a,b,c){
    a=a || 1// || .:. ou
    b=b || 1
    c=c || 1
    return a+b+c
}

//console.log(soma1(0,0,0))///não vai dar zero,porque 0 vai ser transformado em valor false

function soma2(a,b,c){
    a= a !==undefined?a:1
    b= 1 in arguments?b:1 /// é 1 porque é a segunda casa no array da funçãp
    c= isNaN(c)? 1:c
    return a + b + c
}
////setença= condinção ?oque vai fazer de acordo com condição : se não faça isso

console.log(soma2)
console.log(soma2(1,2,"aaaaaaaa"))
console.log(soma2(2))
console.log(soma2(1,2,3))


//valor padrao do es2015

function soma3(a=1,b=1,c=1){
    return a+b+c
}
console.log(soma3(1,3,4),soma3(20,2,3),soma3("1","1","1"))
