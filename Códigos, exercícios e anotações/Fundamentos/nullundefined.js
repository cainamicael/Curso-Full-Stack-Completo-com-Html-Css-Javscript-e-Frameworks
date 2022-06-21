let valor
console.log(valor)

valor = null //ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined
console.log(produto.preco)
delete produto.preco
console.log(produto)

console.log(!!produto.preco)
console.log(produto)