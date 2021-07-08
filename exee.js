const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function(click) {
    console.log('alguém clicou', click)
})

// meuEmissor.emit(nomeEvento, 'no cmd!')

// let count = 0
// setInterval(function() {
//     meuEmissor.emit(nomeEvento, '' + count++)
// }, 1000)

const stdin = process.openStdin()
function main() {
    return new Promise(function (resolve, reject) {
        return stdin.addListener('data', function(value) {
            //console.log(`Você digitou ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}

main().then(function(resultado) {
    console.log('resultado: ', resultado.toString())
})