const primaria = callback => {
    const valorASerSomado = 20
    callback(valorASerSomado)
}

primaria(number => console.log(number))

const sobrenome = callback => {
    const sobrenome = 'Silva'
    callback(sobrenome)
}
const nome = 'Cainã '
sobrenome(sob => console.log(nome + sob))

const idades = [14,15,16,17,18,19,20,30,50,18,18,68,28,25,20,23]
idades.forEach((valor ,indice) => console.log(`Na posição ${indice}  idade ${valor}`))

const deMaior = idades.filter(i => i>=18)
console.log('As idades de maior presentes são: ' + deMaior )

console.log("A média de idades maiores = a 18 é: ")
const media = deMaior.reduce((a,b) => a+b)
console.log((media/deMaior.length).toFixed(0))