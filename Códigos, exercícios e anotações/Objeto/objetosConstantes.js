const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa) //Congela o objeto

const pessoaConstante = Object.freeze({nome: 'João'}) //Congela o objeto
console.log(pessoaConstante)