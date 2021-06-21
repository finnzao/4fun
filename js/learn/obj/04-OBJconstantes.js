/*Mesmo um objeto sendo atrelado para uma constante podemos mudar o valores dentro do obj,
porque quando alocamos uma const estamos em qual lugar de memoria ela ira ficar,
exemplo:*/
const ABC={nome:"Pedro"}
/* consta ABC foi armazenado na memoria que pode ser encontra quando se digita certo bits, */
ABC.outrodado="XXA"
console.log(ABC)
/*ao adiconar um novo dado na alteramos o endereco da const */
//ABC={nome:"Ana"}
//mas quando tentamos mudar o local da memoria estar alocado ira dar erro,porque uma cons nao pode ser mudada

Object.freeze(ABC)//Congelando o valores desse dado

ABC.nome="trocando o nome"
console.log(ABC)
