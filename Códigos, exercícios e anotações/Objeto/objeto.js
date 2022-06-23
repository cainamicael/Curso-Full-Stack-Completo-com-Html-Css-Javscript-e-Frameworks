//Coleção dinâmica chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca do produto']

console.log(produto)

const carro = {
    modelo: 'a4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorDoSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)