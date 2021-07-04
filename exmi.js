var readLine = require('readline');

var leitor = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Digite a primeira nota? ', function(answer) {
    var n1 = Number(answer);
    leitor.question('Digite a segunda nota? ', function(answer) {
        var n2 = Number(answer);
        leitor.close()
    console.log(`A média entre ${n1} e ${n2} é igual a ${(n1+n2)/2}.`)
    });    
});


