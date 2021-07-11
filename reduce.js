console.log('Utilizando REDUCE')

const produtos = [
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},
    {id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento'},
    {id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento'},
    {id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento'}
]

const ids = produtos.map(produto => produto.id)
const soma = ids.reduce((acc, number) => acc + number);
console.log(`A soma de todos os ids é ${soma}`)

const total = produtos.reduce((acc, produto) => acc + produto.valor, 0);
/* É ideal colocar o 0 depois da virgula como valor inicial,
   porque ele acaba pegando o primeiro item do array e acumula
   gerando o resultado [object 0bject]6.5272.2.Dessa forma, é 
   necessário utilizar o 0.
*/
console.log(`A soma de todos os valores é ${total}`)