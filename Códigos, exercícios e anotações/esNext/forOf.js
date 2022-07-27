//O for in intera na forma de indica, ja o for of na forma de valores
for (let letra of 'Cod3r'){
    console.log(letra)
}

const assuntosEcma = ['map','set','promise']
for (let i in assuntosEcma){
    console.log(i)
} 
for (let assunto of assuntosEcma){
    console.log(assunto)
} 

const assuntosMap = new Map([
    ['map', {abordado: true}],
    ['set', {abordado: true}],
    ['promise', {abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}
for (let chave of assuntosMap.keys()){
    console.log(chave)
}
for (let valor of assuntosMap.values()){
    console.log(valor)
}
for (let [ch, v1] of assuntosMap.entries()){
    console.log(ch, v1)
}