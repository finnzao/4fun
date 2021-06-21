function area(l,h){
    const area= l*h
    if (area>20){
        console.log(`Error///${area}`)
    } else{
        return area
    }
}

area(2,4)
console.log(area(2))
console.log(area( ) )
console.log(area(2,3,20,23131,41041))
console.log(area(2,20))//retorna undefined ,porque poderia in js poderia retorna qualquer coisa
