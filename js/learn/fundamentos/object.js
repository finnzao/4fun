/*objetos são usados {} são pares de valores */
const prod1={};
prod1.nome= "Nome para o objeto"/// recebeu um identificador (pode ser str ou int e etc)chamado "nome"
prod1.preco=4550///identificador com nome preco
prod1["String como identificador"]="xx";
console.log(prod1);
// prod1{chave}.nome{valor}
const prod2={
    nome:"AA",
    preco:123,
    obj:{
        obj:"name",
        x : {
            ad:430
        }
    }
}

console.log(prod1,prod2)