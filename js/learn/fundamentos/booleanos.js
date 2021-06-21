let isAtivo =false
console.log(isAtivo)

isAtivo=true
console.log(isAtivo)

isAtivo=1
console.log(!!isAtivo)

console.log("indices verdadeiros")
console.log(!!3)
console.log(!!-45)
console.log(!!'')
console.log(!!{ })
console.log(!![])
console.log(!!Infinity)
console.log(!!0)
console.log(!!(isAtivo=true))


console.log(`
    os indices falsos`)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)


///provando
console.log(`
    para finalizar`)
console.log(!!("" ||  null || 0 || 'a'))
console.log(("" || null || 0 || "valor verdadeiro"))////imprimi o primeiro valor verdadeiro

let nome =''

console.log(nome || 'Desconhecido')// --> | | <--barras sao usadas para caso algo esteja indisponivel usa o outro


