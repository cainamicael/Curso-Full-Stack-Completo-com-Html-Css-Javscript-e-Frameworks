const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i in notas) {
    console.log('Índice ' + i + ' recebe o valor ' + notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}
for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
/* O exemplo acima, de uma forma mais fácil de entender. o for in de objeto funciona da mesma forma que no array
for(let i in pessoa) {
    console.log('atributo ' + i + ' recebe o valor ' + pessoa[i])
}
*/

