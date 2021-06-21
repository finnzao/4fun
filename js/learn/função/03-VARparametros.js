function soma(){
    let soma=0
    //arguments é uma array,ele é presente em toda função,mas fica vazio quando nao se dar parametro    
    for (i in arguments){
        soma+=arguments[i]//entrando no array
    }
    return soma 
}


console.log(soma(20,20))
console.log(soma(2.5,10.6,20))
console.log(soma("A","B",20))
console.log( soma( ) )
let a = [2,3,4,5,5]
console.log(soma(a))
console.log(soma(20,20,"ada"))



