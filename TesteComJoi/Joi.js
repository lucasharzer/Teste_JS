// npm i joi
const Joi = require('joi')

const dados = Joi.object({
    usuario: Joi.string()
        .alphanum()
        .min(3)
        .max(10)
        .required(),
    
    senha: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/)
        // função padrão pattern que aceita de 3 a 30 letras maiúsculas, minúsculas, números.
        .required(),

    ano_nascimento: Joi.number()
        .integer()
        .min(1900)
        .max(2015),
    
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        // função email com mínimo de 2 seguimentos de dominio e permitindo 'com' e 'net'
        .optional()
})

module.exports = {
    dados
}