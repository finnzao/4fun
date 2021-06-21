console.log(Math.ceil(15.6))

const obj1={}
obj1.novaconstante="coteudo da constante"////o Uso do ponto faz criar uma nova constante
//obj1["nova constante"]="coteudo da constante" -não é recomendando fazer assim
console.log(obj1)
console.log(obj1.novaconstante)
////

function Obj(nome){
    this.nome=nome////tornando publico atibruto  com titulo de "nome",ou seja pode ser usado fora da função
    this.exec= function(x){
        console.log(x.nome)
    }
}


const obj2=new Obj('Cadeira')//// posso usar a função "Obj" porque se tornou publica
const obj3=new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3)
obj3.exec(obj2)