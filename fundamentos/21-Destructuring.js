const pessoa={
    nome:"ana",
    idade:30,
    endereco:{
        logradouro:'Rua ABC',
        numero:1000,
    }
}
//// destricturing se usa o {}(ou [] se for array) quando queremos tirar algo do obj
const {nome,idade}=pessoa///retirar nome e idade do objeto pessoa,o "=" se refere para qual objeto ele estar
console.log(nome,idade)//agora ele estar valido no conceito global

const {nome:n,idade:i}=pessoa///agora colocamos nomes diferentes para os atributos
console.log(n,i)

const{sexo, sobrenome=true}=pessoa///se não estiver dentro do obj ele não retorna,pode colcoar True para ser adiconando se caso nao esteja ainda
console.log(sobrenome,sexo)

const{endereco:{logradouro,numero,cep} }=pessoa
console.log(logradouro,numero,cep)

const {conta:{ag,num}}=pessoa/////apenas os ultimos dados não pode existe,se o dado mãe não existir vai dar erro
//console(ag,num) vai dar erro   