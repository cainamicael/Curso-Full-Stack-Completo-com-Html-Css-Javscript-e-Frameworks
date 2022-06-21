function tratarErroELancar(erro){
    //throw new erro('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message
    }
}
function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')    
    }catch (e) {
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {nome: 'roberto'}
imprimirNomeGritado(obj)
