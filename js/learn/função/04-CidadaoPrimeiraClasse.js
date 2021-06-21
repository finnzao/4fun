/*PARTE DA FUNÇÂO
function nome da função(parâmetro){sempre necessario o bloco}
OBS:quando chamos função sem o parenteses estamos chamado ela completa,e sem invocar ela
*/

//criar de formar literaria
function nome(parametro){

}

//Armazena em uma variavel
const fun1 = function(){ } 

//Armazena em uma array
const array= [function(a,b){ return a+b} ,nome]
console.log(array[0](10,20))

//Armazena em um atributo de objeto
const obj={}
obj.falar= function (){return "STRING"}
console.log(obj.falar())


//Passar função como para
function run(fun){
    fun()//fazendo uma função ser invocada,retornanda a função como paramentro
}

run(function(){console.log('Executando...')})

//Função pode retorna/conter um função
function soma(a,b){
    return function(c){/// toda vez que recebe uma função como parametro vai fazer isso
        console.log(a+b+c)
    }
}

soma(20,30)(3)///o resultado de soma vai ser uma função,e já aplica na segunda função

let num= soma(30,30)
num(4)