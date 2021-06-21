function pessoa(){
    this.idade=-1
    
    const self= this///podemos armazenar o this global da função em uma constante assim,é só usar ela ,mas precisa colocar self,todo momento que referimos para this
    setInterval(function(){
        self.idade++
        //console.log(self.idade)
    },1000 )
}

//new pessoa///instanciando a função pessoa

///////////////////////OUTRO MEIO//////////////////////
function pessoa1(){
    this.idade=10
    setInterval(function(){
        this.idade++
        //console.log("====" + this.idade)////nesse casos estamos no referindo a função "setInterval" e não para pessoa
    }.bind(this),10000)//esse blind(this) estar referindo ao objeto maior que seria a função pessoa,e não a função "setInterval"
}

//new pessoa1
///////USANDO THIS///////

function pessoa2(){
    this.idade=0
    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}

new pessoa2