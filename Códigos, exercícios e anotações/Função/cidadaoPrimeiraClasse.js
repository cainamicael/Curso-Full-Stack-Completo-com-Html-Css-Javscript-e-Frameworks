// função literal
function fun1() { }

// função em variavel
const fun2 = function () {}

//função no array
const array = [function(a,b) {return a+b} , fun1, fun2]
console.log(array[0](2,3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'OPA'}
console.log(obj.falar())

//função como parâmetro de outra função
function run (fun) {
    fun()
}
run(function ( ){ console.log('Executando...')})

//uma função pode retornar/conter uma função

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
} 
soma(2,3)(4)
const cincomais = soma(2,3)
cincomais(4)

