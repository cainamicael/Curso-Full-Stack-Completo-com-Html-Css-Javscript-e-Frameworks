const imprimirResultado = function(nota){
    switch (Math.floor(nota)){ // Arredonda para baixo
        case 10: // case 10 e 9, não precisa repetir a sentença
        case 9:
            console.log('Quadro de Honra!')
            break // Para ele não precisar entrar nos outros casos
        case 8: case 7: // Outro modelo
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')                 
    }
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
