let contador = 1
while(contador <=10){
    console.log(`Contador = ${contador}`)
    contador++
}

console.log()

// mesma estrutura no for
//Primeiro vem a declaração; depois vem a expressão que vai dixer se ele continua ou não no laço; depois vem o incremento
for (let i = 1; i <= 10; i++ ){
    console.log(`Contador = ${i}`)
}
console.log('\n')
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (i = 0; i < notas.length; i++){
    console.log(`Notas[${i}] = ${notas[i]}`)
}