const x=[1,2,3,4,5,67]


for (i in x){/// dentro da estrutra repete até a quantidade de componetes acabar   
    console.log(i,x[i])///recebe indice(i) e não valor da nota
}

const p={
    fist:'xyz',
    second:42,
    third:'Third'//////use single quotes
}

for (y in p){
    console.log(`${y} .:. ${p[y]}`)
}

///recommended use of "let" beacause the variabel exist only in the structure,NOT A GLOBAL VARIABEL
