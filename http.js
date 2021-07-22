const http = require('http')

const port = 4000
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Context-Type':'text/plan'})
    response.write('HTTP!!!\n')
    response.write('JavaScritp!!!\n')
    response.end('Hello Node!!!')
})
server.listen(port, () => console.log(`O servidor está rodando em http:localhost:${port}`))
