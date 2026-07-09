const input = require('readline-sync')


const alunos = [
  { id: 1, nome: "pietro", nota: 10.0 },
  { id: 2, nome: "piola", nota: 7.2 },
  { id: 3, nome: "ruan", nota: 6.2 },
  { id: 4, nome: "Diego", nota: 9.9 },
  { id: 5, nome: "cris", nota: 0.1 }
]

const Situacao = alunos.map(aluno => {
  return {
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
  }
}
)

console.log(Situacao);
