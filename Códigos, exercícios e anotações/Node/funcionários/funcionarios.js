const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //cliente http - Obtem informações remotas

//minha resposta
axios.get(url).then(response => {
    const funcionarios = response.data
    const array = Object.entries(funcionarios) //transforma o objeto em array
    const china = array.filter(e => e[1].pais == 'China') // armazena os chineses no array
    const objChina = china.map(a => a[1]) // eu pego só os valores e desconsidero as chaves
    const salarioChines = objChina.map(obj => obj.salario) //crio um array só com os salarios
    let maior = 0
    salarioChines.forEach(salario => {if (salario > maior) maior = salario})
    const chinesComMaiorSalario = china.filter(a => a[1].salario == maior)
    console.log('Dados do Chinês com o maior salário: ')
    console.log(chinesComMaiorSalario[0][1])
})

//Resposta do prof

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})