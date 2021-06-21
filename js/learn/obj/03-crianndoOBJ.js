//usando a literal 
const obj1={}
console.log(obj1)


//object em JS
console.log(typeof Object,typeof new Object)///objeto criado a partir de uma funcao(estaciando um objeto a parti de uma funcao,)
const obj2=new Object
console.log(obj2)

//ESTANCIAR E CRIAR OBJETOS
function func(n,p,t) {
    this.name=n///deixando o N visivel fora da funcao,P e T ainda estao privado para a funcao
    this.getP=() => {//deixando a funcao publico sem que tenha o poder de alterar P e T
        return p *(1-t)
    }
    
}

const x1=new func('N1',200,0.2)//NIVEL DE VISIBILIDADE ==     GLOBAL>FUNCAO>BLOCO
console.log(x1)
x1.name="N2"
console.log(x1)
console.log(x1.getP())

console.log("=")
//Funcao Factory

function func2(nome,sal,falta) {
    return {//usando o colchete no return crio um objeto
        nome,
        sal,
        falta,
        getsal(){
            return ((sal/30) * (30 - falta)).toFixed(2)
        }
    }
}

console.log(func2("Name",23,1))
console.log(func2("Name2",20,1).getsal())
//or
const f1= func2("Name3",2000,2)
console.log(f1.getsal())

console.log("=")
//Object.creat
const f=Object.create(null)//criando obejto vazio
f.novoObjeto="dentro do objeto"
console.log(f)

//Funcao que retorna objeto
const fromJSON=JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)