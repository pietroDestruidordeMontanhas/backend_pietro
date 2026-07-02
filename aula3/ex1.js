const input = require('readline-sync')

const aluno = {nome: "pietro merlo", idade: 15, nota: 100, curso: "desenvolvimento de sistemas", cidade: "cascavel"};

console.log(`${aluno.nome}`)
console.log(`${aluno.idade}`)
console.log(`${aluno.nota}`)
console.log(`${aluno.curso}`)
console.log(`${aluno.cidade}`)

aluno.cidade = "bogota";

console.log(`agora eu moro em ${aluno.cidade}`)

