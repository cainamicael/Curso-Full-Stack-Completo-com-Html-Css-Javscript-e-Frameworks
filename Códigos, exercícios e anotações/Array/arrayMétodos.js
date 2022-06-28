const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'massa']
pilotos.pop()//massa quebrou o carro
console.log(pilotos)

pilotos.push('Vestappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // Massa quebrou
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo array
const algunsPilotos2 = pilotos.slice(1, 4) //novo array

console.log(algunsPilotos)
console.log(algunsPilotos2)
