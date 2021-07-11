console.log('Utilizando FILTER')

const produtos = [
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},
    {id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento'},
    {id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento'},
    {id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento'}
]

const alimentos = produtos.filter(produto => produto.categoria === 'alimento')
const nomes = alimentos.map(alimento => alimento.nome)
console.log(`De todos os produtos da lista, somente os alimentos são ${nomes}`)