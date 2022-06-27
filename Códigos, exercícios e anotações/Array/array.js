console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//retorna undefined

aprovados[3] = 'paulo' //Substituição
aprovados.push('Abia')//adição

console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)//true
console.log(aprovados[8] === null)//false

console.log(aprovados)

aprovados.sort() //Ordenar
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //apartir do indice 1, excluir 1(ou +) elemento
console.log(aprovados)
aprovados.splice(1, 2, 'addelemento1', 'addelemento2')//dps da exclusão, ele pode adicionar também