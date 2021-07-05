let readLine = require("readline");
let nome = ""

let leitor = readLine.createInterface ({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Qual é o seu nome? ', function (answer) {
    let nome = answer;
    console.log(`Olá ${nome.toUpperCase()}, seja Bem-Vindo!\nSeu nome tem ${nome.length} letras.`)
    leitor.close()
    console.log('------------------\nFinalizando...')
    setTimeout(() => {
        console.log('FIM!')
    }, 6000);
});
