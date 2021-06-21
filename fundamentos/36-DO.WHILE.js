function getInt(max,min){
    const valor=Math.random()*(max-min)+min
    return Math.floor(valor)
}

let opcao =-1////não pode ser const ,porque ele vai ser alterado

do {
    opcao=getInt(-1,20)///essa codição será testada ,e apenas verificada depois se é TRUE or FALSE quando chegar 
    console.log(`O numero escolhio foi ${opcao}.`)
} while(opcao !=-1) ///////mesmo a condinção já sendo TRUE,vai ser testada primeiro


console.log("END")

