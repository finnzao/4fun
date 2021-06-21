const peso1=1.////mesmo com virgula é do number (int) e não float, porque é zero no final
const peso2=Number("2.0")

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))


const avaliacao1=9.51
const avaliacao2=6.12
const total=avaliacao1 *peso1 +avaliacao2*peso2
const media=total/(peso1+peso2)

 console.log(media.toFixed(1))//define numero casas
console.log(media.toString(2))//transformar em binario
console.log(typeof media)


console.log("--------------")
/*
CUIDADOS
*/
console.log(7/0)////type infinity
console.log("10.5"/2)/////mesmo em strig pode fazer divisao
console.log("Show" *2)///nao dar certo
console.log(0.1+0.7)
//console.log(10.toString())
console.logo((10.414141).toFixed(2))///precisa chamar dentro de parentese se nao tiver variavel 




