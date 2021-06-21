const notas=[7.7,6,9,10,20,5,6]

//Sem callback
let notasbaixas1=[]
for (let i in notas){////in notas,significa que vai repetir o for até acaba os elementos de notas
    if (notas[i]<7){
        notasbaixas1.push(notas[i])////para esse elemento.push(adicionar isso)
    }

}
///CTRL+F2 mudar todas selecionadas
console.log(notasbaixas1)

//Com callback

const notasbaixas2 =notas.filter(function(nota){///filter:verifica se a condição é TRUE ou FALSe para ser adicionada
    return nota<7
})
console.log(notasbaixas2)
//////

const notasbaixas3=notas.filter( nota=> nota<7)
console.log(notasbaixas3)

