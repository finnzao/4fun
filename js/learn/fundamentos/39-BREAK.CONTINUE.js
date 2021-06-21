const nums=[1,2,3,4,5,6,7,8,9]

for (x in nums){
    if (x ==5){
        break
    }
    console.log(`${x} .:. ${nums[x]}`)
}
console.log("======"*20)
for (y in nums){
    if (y==5)   {////pulou o y 5
        continue
    }
    console.log(`${y} .:. ${nums[y]}`)
} 

externo: for(a in nums){
    for (b in nums){
        if(a==2 && b==3) break externo ///pode direcionar o break para um lanço externo
        console.log(`Par=${a},${b} `)
    }
}
console.log("END")