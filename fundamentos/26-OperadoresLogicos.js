function compras(tr1,tr2){
    const operacaoOU= tr1 || tr2//  || equivalve ao "ou"; | equivale comparar bit-a-bit
    const operacaoI= tr1 && tr2 // & equivale ao "e";chamada de curto-circuito
    const OUexclusivo=  !!(tr1 ^ tr2)//bitwise xor || ^ equivale à OU
    //const outexclusivo= tr1 != tr2//
    const negacaologica= !operacaoOU //operador uninario
    /*todos são operados binarios.menos a negação logica */
    return {operacaoI,operacaoOU,OUexclusivo,negacaologica}
    //mesmo sendo um objeto não é preciso da ter o par,apenas o valor nesse return
    //ele vai fazer chave,valor com mesmo nome autamaticamente
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))