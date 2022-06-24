//cadeia de protótipos
Object.prototype.attr0 = '0'
const avo = {attr1: 'A'} // o __proto__ dele é o Object.prototipe
const pai = {__proto__: avo, attr2: 'B', attr3: 'Fe'}
const filho = {__proto__:pai, attr3: 'C'}
console.log(filho.attr1)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) //vai mostrar o attr3 de filho (Shadowing)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 //Shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()} ` //o super serve para chamar o objeto da herança. não o this
    }
}

Object.setPrototypeOf(ferrari, carro) // Ferrari vai ter como protótipo carro
Object.setPrototypeOf(volvo, carro) // Volvo vai ter como protótipo carro

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())