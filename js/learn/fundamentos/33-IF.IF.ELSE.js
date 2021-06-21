Number.prototype.entre= function (first,last){
    return this>=first && this<= last///uso do this porque vai se referir ao number conceito principal da estrutura local
}

const imprimirResultado= function(nota){
    if(nota.entre(10,20)){
        console.log('if =' +nota)
    } else if(nota.entre(21,30)){
        console.log('else if',+ nota)
    } else if(nota.entre(31,40)){
        console.log("else if nota=",+ nota)
    } else if(nota.entre(90,100)){
        console.log("else if",+ nota)
    } else{
        console.log("else ",+ nota)
    }
}


imprimirResultado(93)