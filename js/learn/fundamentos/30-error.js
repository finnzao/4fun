function error(){////thorw monstrar na tela de error
    //throw new Error('...')
    //throw 10
    //throw true
    throw {
        nome:error.name,
        msg:error.message,
        date:new Date,
    }
}

function imprimir(obj){
    try{
        console.log(obj.name.toUpperCase()+ "!!!")
    }   catch(e){ ///pegar o erro
        error(e)
    }   finally{
        console.log("Fim do programa")
    }
    
}
const obj={nome:'Roberto'}
imprimir(obj)