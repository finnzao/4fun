const funcs=[]

for (let i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[4]()
/*se fosse usando (var) no loop o resultado da "funs[2]()" daria 10, porque o acesso a memoria no let
é diferente do var */

