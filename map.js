console.log('Utilizando MAP')

const produtos = [
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},
    {id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento'},
    {id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento'},
    {id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento'}
]

const ids = produtos.map(produto => produto.id)
const nomes = produtos.map(produto => produto.nome)
console.log(`Os nomes dos produtos são ${nomes}`)

const duplicados = ids.map(n => n*2)
console.log(`Os ids duplicados são ${duplicados}`)

