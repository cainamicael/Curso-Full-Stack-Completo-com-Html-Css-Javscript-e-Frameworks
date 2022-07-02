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
        medias[c] = nota/ Object.entries(alunos).forEach(array => array[1])
        c++
    }
    return medias
}

const alunos = {Joao: [10, 10, 10, 10], Marina: [8, 8, 8, 8], carla: [7, 7, 7, 7]}

console.log(media(alunos))