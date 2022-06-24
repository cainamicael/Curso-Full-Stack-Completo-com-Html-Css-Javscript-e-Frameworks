const sequencia = {

    _valor: 1, //Mostra que vai ser uma variável privada - Mas é só na sintaxe, não muda a semântica

    get valor(){
        return this._valor++
    },

    set valor(valor){
        if (valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)//get
sequencia.valor = 1000 //set
console.log(sequencia.valor, sequencia.valor)
