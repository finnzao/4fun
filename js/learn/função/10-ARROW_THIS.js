let compararComThis= function (param){
    console.log(this===param)////comparando this da função com parametro recebido
}

compararComThis(global)///paramentro do this da função ainda é global

const obj={}
compararComThis=compararComThis.bind(obj)//alocando o this para o obj
compararComThis(global)//this não é mais global
compararComThis(obj)//this estar se referindo para o obj agora

let compararComThisArrow= param=>console.log(this==param)//nas funções arrow sempre vai apotar para função local
compararComThisArrow(global)
compararComThisArrow(module.exports)

compararComThisArrow=compararComThisArrow.bind(obj)///mesmo tentando alocar o this em um novo lugar,ele vai vai pertencer a function arrow
compararComThisArrow(obj)