/*
1-Obter usuario
2-Obter telefone a partir do id do usuario
3-Obter endereco a partir do id do usuario
*/
const { mainModule } = require('process')
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterusuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve ({
                id: 1,
                nome: 'Lucas',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve ({
                telefone: '1199202',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout (() => {
        return callback (null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}

main()
async function main() {
    try {
        console.time('medida-promise')
        const usuario = await obterusuario()
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]
        console.log(`
        Nome: ${usuario.nome}
        Telefone: (${telefone.ddd}) ${telefone.telefone}
        Endereco: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medida-promise')
    }
    catch(error) {
        console.error('DEU RUIM', error)
    }
}
