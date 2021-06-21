let num1=1
let num2=2

num1++
console.log(num1)//PEMDAS:
--num1//pre fixadores tem prioridade,ou seja são feitos primeiro 
console.log(num1)

console.log(++num1 === num2--)
//ele foi certo,porque o a soma foi prioridade entao ficou (2=2),e depois foi feito subtração do num2
console.log(num1 === num2)
