//Questão 1
const cumprimentar = nome => console.log(`Olá, ${nome}!`)
cumprimentar('leonardo')
cumprimentar('maria')

//Questão 2
const converterIdadeEmDias = idade => idade * 365
console.log(converterIdadeEmDias(25))
console.log(converterIdadeEmDias(70))

//Questão 3
const calcularSalario = (horasTrabalhadas, valorPorHora) => console.log('Salário igual à: ' + horasTrabalhadas * valorPorHora)
calcularSalario(150, 40.5)

//Questão 4
function nomeDoMes(numero){
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    return console.log(meses[--numero])
}
nomeDoMes(1)
nomeDoMes(4)
nomeDoMes(12)

//Questão 5
const maiorOuIgual = (n1, n2) => {
    if (typeof n1 != typeof n2) return false
    return n1 >= n2}
console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))

//Questão 6
const inverso = valor => {
    const tipo = typeof valor
    if (tipo == 'boolean'){
        return !valor
    }else if (tipo == 'number'){
        return -valor
    }else {
        console.log(`Boolean ou Number esperados, mas o parâmetro é do tipo ${tipo}`)
    }
}
console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(2000))
console.log(inverso("Programação"))

//Questão 7

