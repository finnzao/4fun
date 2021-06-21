const val= [1.4,2.0,90,1.45]///arrays são usados [] atraves de um identificador
console.log(val[0], val[3])
console.log(val[500])

val[500]=41
console.log(`
${val[500]}
`)
delete val[500]
 console.log(val.length)
 console.log(val)
 val.push({id:3},false,null,"x")
 console.log(val.pop())///mostra ultimo elemento
 console.log(typeof val)

