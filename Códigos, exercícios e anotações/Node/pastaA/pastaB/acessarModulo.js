const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const http = require('http')
http.createServer((req,resp) => {
    resp.write('Bom dia')
    resp.end()
}).listem(8080)
