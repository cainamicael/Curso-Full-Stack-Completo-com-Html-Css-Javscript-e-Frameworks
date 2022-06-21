const soma = function (x, y) {
    return x + y
}

const imprimirResultado =  function (a, b, operacao = soma) { //se não colocar o terceiro parametro, ele chama soma default
    console.log(operacao(a, b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3, 4, function (x,y){return x-y}) //passando outra operação como parâmetro | Função anonima 
imprimirResultado(3, 4, (x,y) => x*y) // arrow function anonima

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
pessoa.falar()