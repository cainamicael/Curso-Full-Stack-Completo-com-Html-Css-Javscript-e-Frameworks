//Gambiarra 1(pessoal):
function media(alunos){
    const notas = []
    const notasSomadas = []
    const medias = []
    let i = 0
    let c = 0
    Object.entries(alunos).forEach(array => notas.push(array[1]))
    for (let nota of notas){
        nota.reduce((a,b) => notasSomadas[i] = a + b)
        i++
    }
    for (let nota of notasSomadas){
        medias[c] = nota/ notas[c].length
        c++
    }
    return medias
}
const alunos = {Joao: [10, 10, 10, 10], Marina: [8, 8, 8, 8], carla: [7, 7, 7, 7]}
console.log(media(alunos))

//Outra forma

function media2(alunos){
    const mapeado = []
    const notas = []
    Object.entries(alunos).map(array => {
        return mapeado.push({nome: array[0], nota: array[1]})
    })
    mapeado.filter(e => notas.push(e.nota))
    return notas
    
}
const alunos2 = {Joao: [10, 10, 10, 10], Marina: [8, 8, 8, 8], carla: [7, 7, 7, 7]}
console.log(media2(alunos2))
