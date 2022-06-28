const aprovados = ['Ágatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice, array) { //o índice é sempre o segundo parâmetro
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)