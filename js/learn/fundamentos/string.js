const str= "Ga123"

console.log(str.charAt(0))
console.log(str.charAt(4))///cara
console.log(str.charAt(6))
console.log(str.charCodeAt(2))///valor na tabela hex(unicode)
console.log(str.indexOf("a"))///mostra a localização de caractere escolhido

console.log(str.substring(1))///nao incluir o indice 1
console.log(str.substring(0,3))//indice zero ate tres,sem incluir o tres//
console.log('str  '.concat(str).concat("!!"))////chama uma função de modo literal
console.log(str.replace("Ga",'li'))///muda indice por outro indice desejado
console.log(str.replace(/\d/,"X"))//substuir todos digitos por X
console.log(str.replace(/\w/g,"X"))///todas letras e numeros por X(g é  a frag global)

/////////////////////////////////
console.log("Pedro,Maria,Joao".split(","))//transformando em array
