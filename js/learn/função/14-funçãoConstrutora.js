function Carro(vM=200,delta=5){
    //atributo privado
    let Vatual=0

    //atributo publico,o this vai ser o responsavel por fazer isso
    this.acelerar=function(){
        if(Vatual+delta<=vM){
            Vatual += delta///Vatual=vataul+delta
        }else{
            Vatual=vM
        }
    }
    this.getVatual= function(){//não deixamos a Vatual para o usario nao mudar e dar erro no sistema
        return Vatual  //atraves de uma função protegemos o atributo privado
        }
    
}   

const car1= new Carro// .:. Carro() mas resevado em um novo objeto ,mas com as espeficicações do this que se tornaram publicos
//const car1=Carro() // nesse caso não foram chamados as espeficações publicas(this.acelar;this.getVatual)
car1.acelerar()
console.log(car1.getVatual())
car1.acelerar()
console.log(car1.getVatual())




const car2=new Carro(400,20)// nova const com atributos do this publicos,mas sem os valores padrões (vM=200,delta=5)

car2.acelerar()
console.log(car2.getVatual())

console.log(typeof Carro)
console.log(typeof car2)