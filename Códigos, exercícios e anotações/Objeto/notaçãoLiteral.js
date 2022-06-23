//Mudanças trazidas com o Ecmascript 2015
const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //ou
const obj2 = {a, b, c}

const nomeAttr = 'Nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr //ou
const obj4 = {[nomeAttr]: valorAttr}

const obj5 = {
    funcao1: function(){

    }
} //Ou
const obj6 = {
    funcao2(){

    }
}