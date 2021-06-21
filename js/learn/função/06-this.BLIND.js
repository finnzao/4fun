/*this ou self é como referencia ao objeto atual da função,se estamos em uma estrutura
e nela usamos o comando "this" estavamos refereindo uma ação diretamente,mas na maioria dos casos
o this ira se referir ao contexto global    */


const Q ={
    saudacao:'BOM DIA',
    falar() {
        console.log(this.saudacao)///this estar se refereindo ao objeto Q,e espeficamos o 'saudacao'
    }
}

Q.falar()


const W =Q.falar.bind(Q)//bind entramos em um objeto para resolver aonde estar o this(Q)nesse caso foi o "Q"
W()