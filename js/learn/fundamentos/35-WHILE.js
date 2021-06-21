 function getInt(min,max){
     const valor = Math.random()* (max-min)+min
     return Math.floor(valor)
 }

 let opcao=0

 while (opcao !=-1 ){
    opcao = getInt(-1,10)
    console.log(`Opção escolhaida foi ${opcao}.`)

//console.log("vai entra no looping while estando uma coluna atras")

}
console.log("END")