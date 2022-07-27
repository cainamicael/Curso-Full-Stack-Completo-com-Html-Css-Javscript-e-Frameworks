//Não aceita repetição e não é indexado
const times = new Set()
times.add('Vasco')
times.add('São paulo').add('palmeiras').add('corithians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.has('vasco'))

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)