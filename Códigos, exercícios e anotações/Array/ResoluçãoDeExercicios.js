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

//Questão 8
function multiplicar(n1, n2){
    let m = 0
    let n = 'Digite números inteiros'
    if (n1 >= 0 && n2 >= 0){
        for(i = 0; i < n2; i++){
            m += n1
        }
        return m
    }else {
        return n 
    }
}
console.log(multiplicar(5,2), multiplicar(20, 4), multiplicar(10, 100))
console.log(multiplicar(5,-2), multiplicar(-20, 4), multiplicar(-10, -100))

//Questão 9
const repetir = (parametro, qtd) => {
    const newArray = []
    for (let i = 0; i < qtd; i++){
        newArray.push(parametro)
    }
    return newArray
}
// ou
const repetir2 = (item, qtd) => {
    return Array(qtd).fill(item)
}

console.log(repetir('Código', 8))
console.log(repetir2(7, 3))
console.log(repetir2('Cainã', 15))

//Questão 10
function simboloMais(vezes){
    let res = ''
    for (i=0; i<vezes; i++){
        res += '+'
    }
    return res
}
console.log(simboloMais(2))
console.log(simboloMais(20))
console.log(simboloMais(1))
console.log(simboloMais(40))

//QUestão 11
function receberPrimeiroEUltimoElemento(array){
    const newArray = []
    newArray.push(array[0])
    newArray.push(array[(array.length)-1])
    
    return newArray
}
console.log(receberPrimeiroEUltimoElemento([0,1,2,3,4,5,6,7,8]))

//Questão 12
function removerPropriedade(objeto, atributo){
    const newObjeto = objeto
    delete newObjeto[atributo]
    return newObjeto
}
console.log(removerPropriedade({a: 1, b: 2}, 'a'))
console.log(removerPropriedade({id: 20,nome: 'Caneta',descricao: 'Não preenchida'}, 'descricao'))
console.log(Object.is(removerPropriedade({a: 1, b: 2}, 'a'),{a: 1, b: 2}))
console.log(Object.is(removerPropriedade({id: 20,nome: 'Caneta',descricao: 'Não preenchida'}, 'descricao'), {id: 20,nome: 'Caneta',descricao: 'Não preenchida'} ))

//Questão 13
const filtrarNumeros = array => {
    return array.filter(item => typeof item === 'number')
}
console.log(filtrarNumeros(['JavaScript', 1, '3', 'Web', 20]))
console.log(filtrarNumeros(['a', 'c']))

//Questão 14
const objetoParaArray = objeto => {
    const array = []
    for (let atributo in objeto){
        array.push([atributo, objeto[atributo]])
    }
    return array
}
console.log(objetoParaArray({nome: 'Maria', profissao: 'Dev'}))
console.log(objetoParaArray({codigo: 1111, preco: 1200}))

//Questão 15
const receberSomenteOsParesDeIndicesPares = array => {
    const array2 = []
    for (let i in array){
        if (i%2 === 0){
            if (array[i]%2 === 0){
                array2.push(array[i])
            }
        }
    }
    return array2
}


console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

//Questão 16
const checarAnoBisexto = ano => {
    if (ano%4 === 0 && ano%400 === 0 || ano%100 != 0  ) return true
    return false
}
console.log(checarAnoBisexto(2020))
console.log(checarAnoBisexto(2016))
console.log(checarAnoBisexto(2100))
console.log(checarAnoBisexto(2024))
console.log(checarAnoBisexto(2012))

//Questão 17
const somarNumeros = array => {
    const newArray = []
    newArray.push(array.reduce((total, atual) => total+atual ))
    return newArray
}
console.log(somarNumeros([10,10,10]))
console.log(somarNumeros([15,15,15,15]))

//Questão 17
function despesasTotais(itens){
    return itens.map(itens => itens.preco).reduce((a,b) => a+b)
}
console.log(despesasTotais([{preco: 10},{preco: 20}]))

//Questão 17
const calcularMedia = array => {
    const soma = array.reduce((a,b) => a+b)
    return soma/array.length
}
console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1,2,3,4,5]))

//Questão 18
const areaTriangulo = (base, altura) => ((base*altura)/2).toFixed(2)
console.log(areaTriangulo(10,15))
console.log(areaTriangulo(7,9))
console.log(areaTriangulo(9.25, 13.1))

//Questão 19
const menorNumero = array => {
    const aux = array
    aux.sort((a,b) => a - b)
    return aux[0]
}
console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))

//Questão 20
const numeroDaSorte = numero => {
    const sort = Math.floor(Math.random() * 11)
    if (numero == sort) return `Parbéns. O numero sorteado foi: ${sort}, e o seu numero escolhido foi ${numero}`
    return `Tente novamente. O numero sorteado foi: ${sort}, e o seu numero escolhido foi ${numero}`
}
console.log(numeroDaSorte(5))

//Questão 21
const contarPalavra = function (palavra){
    const totalDePalavras = palavra.split(' ')
    return totalDePalavras.length
}
console.log(contarPalavra('Sou uma frase'))
console.log(contarPalavra('me divirto aprendendo a programar'))
console.log(contarPalavra('a'))

//Questão 22
const contarCaractere = function (caractere, frase){
    let contador = 0
    for (let letra in frase){
        if (frase.charAt(letra) === caractere) contador++
    }
    return contador
}
console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'conhece-te a ti mesmo'))

//Questão 23
const buscaPalavrasSemelhantes = (palavra, array) => {
    const a = []
    for (let i in array){
        if (array[i].substr(0, palavra.length) == palavra) {
            a.push(array[i])
        }
    }
    return a
}

//ou

const buscarPalavrasSemenhantes2 = (palavra, array) => {
    return array.filter(palavras => palavras.includes(palavra))
}
console.log(buscaPalavrasSemelhantes('pro', ['programa','profissional','photoshop']))
console.log(buscarPalavrasSemenhantes2('python', ['java','css','go']))

//Questão 24
const removerVogais = palavra => {
    let semVogais = palavra
    const vogais = ['a', 'e', 'i', 'o', 'u']
    vogais.forEach(vogal => semVogais = semVogais.replace(vogal, ''))
    return semVogais
}
console.log(removerVogais('aeiou'))
console.log(removerVogais('Cod3r'))
console.log(removerVogais('FUNDAMENTOS'))

//Questão 25
const inverter = objeto => {
    let newObjeto = {}
    for (let atributo in objeto){
        newObjeto[objeto[atributo]] = atributo
    }
    return newObjeto
} 
//ou
const inverter2 = objeto => {
    const objetoInvertido = {}
    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0
        const valor = 1
        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })
    return objetoInvertido
}
console.log(inverter({a: 1, b: 2}))
console.log(inverter2({bem_1: 'casa', bem_2: 'carro'}))
console.log(inverter2({a: 574.5, b: 887}))
console.log(inverter({bem_1: 'casa', bem_2: 'carro'}))

//Questão 26
function filtrarPorQuantidadeDeDigitos(array, digito) {
    let newArray = []
    for (let i in array){
        if (array[i].toString().length === digito) newArray.push(array[i])
    }
    return newArray
}

//ou
function filtrarPorQuantidadeDeDigitos2(array, digito) {
    const newArray = array.filter(numero => numero.toString().length === digito)
    return newArray
}

console.log(filtrarPorQuantidadeDeDigitos([1,2,30], 2))
console.log(filtrarPorQuantidadeDeDigitos2([5,9,1,125,11], 1))

//Questão 27
const segundoMaior = array => {
    const aux = array 
    aux.sort((a,b) => b - a )
    return aux[1]
}
console.log(segundoMaior([12,16,1,5]))
console.log(segundoMaior([8,4,5,6]))

//Questão 28
const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / (array.length)

function receberMelhorEstudante(estudantes){
    const estudantesComMedia = Object.entries(estudantes).map(estudante => {
        const chave = 0
        const valor = 1
        return {nome: estudante[chave], media: media(estudante[valor])}
       
    })
    const estudantesOrdenados = estudantesComMedia.sort(((a,b) => b.media - a.media))
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}
console.log(receberMelhorEstudante({Joao: [8, 7.6, 8.9, 6], Marina: [9, 6.6, 7.9, 8], carla: [7, 7, 8, 9]}))

//
const obj = {nome: 'caina', sobrenome: 'micael'}
const objArray = Object.entries(obj)
console.log(objArray[0])