

let preco ///underfined :nao inicializado
console.log(preco)

preco=null///ausencia de valor,quando quer zera o valor
console.log(preco)
//consele.log(valor.toString())// ERROR ao tentar executar valor null

const produto = {}
console.log(produto.preco)
console.log(produto) 

produto.preco = 3.50
console.log(produto)  


produto.preco=undefined//evite fazer isso
console.log(!!produto.preco)
//delete produto.preco //isso teria um objetivo vazio
console.log(produto)

produto.preco = null//sem preco
console.log(!!produto.preco)
console.log(produto)