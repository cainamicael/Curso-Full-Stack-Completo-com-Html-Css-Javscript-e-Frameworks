/*
const prod1 = {
    nome: 'nome', 
    preco: 45
}

const prod2 = {
    nome: 'nome', 
    preco: 1000
}

...
*/

//factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
