//Object.preventExtensions - Bloqueia add atributos, mas pode remover
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})

console.log("Extensivel: ", Object.isExtensible(produto))
produto.nome = 'borracha'
delete produto.tag
console.log(produto)

//Object.seal - Selar: Não pode adicionar nem remover, mas posso mudar os valores
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa) 
console.log('Selado:', Object.isSealed(pessoa))