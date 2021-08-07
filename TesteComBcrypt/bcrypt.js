// npm i bcrypt

console.log('criptografando com bcrypt')

const Bcrypt = require('bcrypt')
const numeroSalt = 10
// número do salt: número da sequência de caracteres acrescentadas aleatóriamente à senha(salt)

const Senha = '123456'

const Salt = Bcrypt.genSaltSync(numeroSalt)
// sequência acrescentada

const hash = Bcrypt.hashSync(Senha, Salt)
// resultado criptografado

console.log('Resultado da senha: ', hash)


// resultado gerado: $2b$10$MJjLpEJxJhnPaRnAaQubm.fyiRsDAwdqQ4BAwjLDgYrDlTUnkH/U
