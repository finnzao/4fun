///Call Back passar uma função para outra função,e parti de um evento ele é ativada
const fabs=["A","B","C"]

function impri(n,i){;;
    console.log(`${i+1}.${n}`)
   
}

fabs.forEach(impri)//forEach é uma função de um array,e pega cada elemento do array
fabs.forEach( function (a){//forEach .:. NOME,INDICE
    console.log(a)
})