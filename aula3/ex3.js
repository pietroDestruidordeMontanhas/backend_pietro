const input = require('readline-sync')

const produtos = [
{id: 1, nome: "coxinha", preço: 100},
{id: 2, nome: "coxinha com catupiri", preço: 150},
{id: 3, nome: "coxinha gigante", preço: 300},
{id: 4, nome: "coxinha gigante com catupri", preço: 350}
]

console.log("")
console.log(".                 CARDAPIO COM TAMANHO", produtos.length, "             .")
console.log("")


for(let i = 0; i < produtos.length; i++){
    console.log(produtos[i])
}

produtos.push({id: 5, nome: "coxinha sem massa gigante com catupiri", preço: 49.99})

console.log("")
console.log(".               NOVO CARDAPIO COM TAMANHO", produtos.length,"         .")
console.log("")

for(let i = 0; i < produtos.length; i++){
    console.log(produtos[i])
}


console.log("")
console.log("---------------------------------------------------------------------------")
console.log("")


const encontrar = produtos.find(p => p.id === 3);

if (encontrar) {
  console.log("Produto encontrado:", encontrar.nome);
}

const Caros = produtos.filter(p => p.preço > 50);

Caros.forEach(p => {
  console.log(p.nome, p.preço, "Reais")
}
)