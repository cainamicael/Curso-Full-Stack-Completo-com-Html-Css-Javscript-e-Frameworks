const escola = [{
    nome: 'turma m1',
    alunos: [{
        nome: 'Gusttavo',
        nota: 8.1
    },{
        nome: 'ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma m2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

console.log(escola)

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype,flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const todasAsNotas = escola.flatMap(getNotasDaTurma)
console.log(todasAsNotas)