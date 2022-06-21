Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}
const impromirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('quadro de honra!')
    }else if(nota.entre(7,8.99)){
        console.log('Aprovado!')
    }else if(nota.entre(4,6.99)){
        console.log('Recuperação!')
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado!')
    }else{
        console.log('Nota inválida!')
    }
    //console.log('Fim!')
}
impromirResultado(10)
impromirResultado(8.9)
impromirResultado(6.55)
impromirResultado(2.3)
impromirResultado(-1)
impromirResultado(11)


