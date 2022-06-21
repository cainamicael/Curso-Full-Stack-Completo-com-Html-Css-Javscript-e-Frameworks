let a = 3
global.b = 123
this.c = 456
this.d = false
console.log(a)
console.log(this.a)
console.log(this.c)
console.log(global.a)
console.log(global.b)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
    
module.exports = {e: 456, f: 789}
abc = 3
console.log(global.abc)