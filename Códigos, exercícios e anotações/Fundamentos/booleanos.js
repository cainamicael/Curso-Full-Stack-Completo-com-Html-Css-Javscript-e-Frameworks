let isATIVO = false
console.log(isATIVO)

isATIVO = true
console.log(isATIVO)

isATIVO = 1
console.log(!!isATIVO)
console.log(!isATIVO)

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!-1)
console.log(!!" ")
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isATIVO = Infinity))

console.log("Os falsos")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isATIVO = false))

console.log("Pra finalizar")
console.log(!!(""||null||0||" ")) // retorna true
console.log((""||null||0||"epa")) // retorna epa

let nome = ""
console.log(nome || 'desconhecido')

nome = "João"
console.log(nome || 'desconhecido')




