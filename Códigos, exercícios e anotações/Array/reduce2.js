const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true}, 
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'ana', nota: 8.7, bolsista: true}
]
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log('Todos são bolsistas? ' + alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado+bolsista //resultado || bolsista para saber se tem 1 bolsista
console.log('Quantidade de alunos bolsistas: ' + alunos.map(a => a.bolsista).reduce(algumBolsista))