//Implementando nosso próprio forEach
Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[1], i, this)
    }
}

const aprovados = ['Ágatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice, array) { //o índice é sempre o segundo parâmetro
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})