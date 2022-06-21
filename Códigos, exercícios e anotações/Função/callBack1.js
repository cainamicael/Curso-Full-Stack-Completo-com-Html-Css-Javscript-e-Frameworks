const fabricantes = ['mercedes', 'audi', 'bmw']

function imprimir(nome, indice){
    console.log(`${indice + 1}, ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(function (a) {console.log(a)}) // a vai ser cada um dos elementos
fabricantes.forEach( fabricante => console.log(fabricante)) // arrow