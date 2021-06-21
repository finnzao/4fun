function teste1(num){
    if(num>7) ///pode escrever sem chaves
        console.log("numero maior que 7")
    else///E COM CHAVES,se estiver mais que uma sentença é necessario uso de chaves
        console.log("ELSE") 
    console.log('out if')
}

teste1(20)
teste1("string")///mesmo sendo uma string,ele é aceito no sistem e entra na condição else
///
console.log("---separador---")

/*ao usar o comando if a proxima setença de codigo ira ser atribuida para ele
             */
function teste2(num){
    if(num>20);
    {
        console.log(num," é maior que 20")
    }
}

teste2(1)