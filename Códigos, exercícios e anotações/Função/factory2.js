function criarProduto (nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 2000))
console.log(criarProduto('Celular', 3000))
console.log(criarProduto('Ipad', 2350))