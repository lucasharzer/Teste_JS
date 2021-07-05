/*
1-Obter usuario
2-Obter telefone a partir do id do usuario
3-Obter endereco a partir do id do usuario
*/
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout (() => {
            return resolve ({
                id: 1,
                nome: 'Lucas',
                dataNascimento: new Date()
            })
        }, 1000);
    })
}

function obterTelefone () {
    return new Promise(function resolverPromise (resolve, reject) {
        setTimeout (() => {
            return resolve ({
                telefone: '1199202',
                ddd: 11
            })
        }, 2000)
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout (() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);
}

const usuarioPromise = obterUsuario()
usuarioPromise
.then(function (usuario) {
    return obterTelefone(usuario.id)
    .then(function resolverTelefone(result) {
        return {
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
            },
            telefone: result
        }
    })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco (result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
        Nome: ${resultado.usuario.nome}
        Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        `)
    })
    .catch(function (error) {
        console.error('DEU RUIM', error)
    })