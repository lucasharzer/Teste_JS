/*
1-Obter usuario
2-Obter telefone a partir do id do usuario
3-Obter endereco a partir do id do usuario
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Lucas',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '1199202',
            ddd: 11
        })
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}

function resolverUsuario (erro, usuario) {
    console.log('usuario', usuario)
}

obterUsuario (function resolverUsuario(error, usuario) {
    if (error) {
        console.error('DEU RUIM em usuario', error)
        return;
    }
    obterTelefone (usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('DEU RUIM em telefone')
            return;
        }
        obterEndereco (usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('DEU RUIM em endereco', error2)
                return;
            }

            console.log(`
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereco: ${endereco.rua}, ${endereco.numero}
            `)
        })
    })
})
