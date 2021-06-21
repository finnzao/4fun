const pessoa={
    nome:'Lois',
    idade:4,
    peso:24
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))//seperar valores dentro do Object e transformado em um array


//Object.entries(pessoa).forEach(e =>{e =>{
//    console.log(`${e[0]}:${e[1]} `)//acessando cada elemento numero 0 e numero 1 da array
//}
Object.entries(pessoa).forEach(e =>{([chave,valor]) =>{
    console.log(`${chave}:${valor} `)
}

})

///IMPORTANTE
Object.defineProperty(pessoa, 'dataNascimento',{//adicionando um novo valor e definindo suas propriedades
    enumerable:true,
    Writable:false,
    value:'01/01/1999'
})

pessoa.dataNascimento='2222'///nao pode ser mudada
console.log(pessoa.dataNascimento)


//Objec.assign (ECMAScrpit 2015)
const dest={a:1}
const o1={b:2}
const o2={c:3,a:4}
const obj=Object.assign(dest,o1,o2)

console.log(obj)