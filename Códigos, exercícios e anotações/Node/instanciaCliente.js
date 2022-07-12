const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()//para retornar um obj
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) //O que fizer no a, afeta no b, pois é uma instância unica

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)//Não afetou o contador d
