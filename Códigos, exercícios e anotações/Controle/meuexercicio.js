function adicionarnovetor(vet){
    for (i=0 ; i<10; i++){
        let a = Number(i)
        a++
        vet[i] = prompt('Digite o elemento que vai ficar na posição ' + a)
    }
}
function imprimivetor(vet){
    for (i in vet){
        console.log(`O vetor na posção ${i} está com o elemento ${vet[i]}`)
    }
}
function atribuindoValoresAosAtributos(obj){
    for (atributo in obj){
        let a = prompt(`Qual o valor para ${atributo}? `)
        obj[atributo] = a       
    }
}
function imprimiobjeto(obj){
    for (atributo in obj){
        console.log(`${atributo} = ${obj[atributo]}`)
    }
}
const vetor = []
const objeto = {nome: undefined , idade: undefined, rua: undefined }
adicionarnovetor(vetor)
atribuindoValoresAosAtributos(objeto)
imprimivetor(vetor)
imprimiobjeto(objeto)
