function x(b){
    if (b>7){
        console.log("If "+ b)
    }
    else{
        console.log("else " + b)
    }
}

x(10)
x(1)
console.log("////")


function iftrue(valor){//// se o falor for verdadeiro
    if(valor){
        console.log("This is "+ valor)
    }
    else{
        console.log("This is False="+ valor)
    }
}
iftrue()
iftrue(null)
iftrue(undefined)
iftrue(2)
iftrue({})
iftrue([])
iftrue([1,2,[1,30,90]])
