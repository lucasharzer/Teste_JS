function exibePrimeiraMensagem(mensagem, callback) {
    console.log(mensagem);
    callback();
}

function exibeSegundaMensagem() {
    console.log('Essa é a segunda mensagem!')
}

exibePrimeiraMensagem('Essa é a primeira mensagem!', exibeSegundaMensagem);
