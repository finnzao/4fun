const sequencia={
    _valor:1,
    get valor() { return this._valor++ },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor,sequencia.valor)
sequencia.valor=1000
console.log(sequencia.valor,sequencia.valor)
sequencia.valor=900//ainda vai ser 1000 devido ao IF
console.log(sequencia.valor)