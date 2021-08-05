const arqJoi = require('./Joi');

const val1 = arqJoi.dados.validate({
    usuario: 'luc123', senha: 'SeNhA57', ano_nascimento: 2002 
});
console.log('Passou na validação dos dados: ' + !val1.error);

const val2 = arqJoi.dados.validate({
    ano_nascimento: 2006
});
console.log('Passou na validação dos dados: ' + !val2.error);
