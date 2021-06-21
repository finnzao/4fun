const valor="Global"

function minhaFuncao(){
    console.log(valor)
}

function exer(){
    const valor="local"
    minhaFuncao()
}

exer()

/*Ao criar uma função se grava o local na qual ele foi inserida,por isso foi armazenado o valor dela global
,já como a função foi criado em um contexto global,sem const ou let,a referencia foi global */