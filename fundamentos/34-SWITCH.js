const x= function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log("Case 9 /10")/////pode colocar mesmo paramentros para dois cases
            break
        case 8: case 7:////pode organizar caso com mesma função desse modo tambem
            console.log("Case 8 /7")
            break////sempre importar colocar break,se não ele vai ler todos os outros cases
        case 6: case 5: case 4:
            console.log('Case 6/5/4')
            break
        case 3: case 2: case 1: case 0:
            console.log("Case 3/2/1/0")
            break///LEMBRAR BREAK
        default:
            console.log("DEFAULT MODE")
            ////não precisa do break no deafut
    }
}
x(10)
x(2000)
x(4.5)
x(4.5,203103)
x(123121,4.5)