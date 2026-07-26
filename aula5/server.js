const express = require('express');
const app = express();

app.use(express.json());

// teste 1

app.get('/', (req, res) => {
    res.json({
        mensagem: "Meu servidor esta no ar!",
    });
});

// ex1

app.get('/sobre', (req, res) => {
    res.json({
        nome: "pietro merlo",
        disciplina: "back-end",
        ano: "2º ano c"
    });
});

//ex2


const produtos = [
{id: 1, nome: "coxinha", preço: 100},
{id: 2, nome: "coxinha com catupiri", preço: 150},
{id: 3, nome: "coxinha gigante", preço: 300},
{id: 4, nome: "coxinha gigante com catupri", preço: 350}
]

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

//ex3

app.get('/status', (req, res) => {
    res.status(200).json({
        online: true,
        mensagem: "Servidor funcionando normalmente."
    });
});

//ex4

app.get('/produtos/caros', (req, res) => {
    const produtosCaros = produtos.filter(produtos => produtos.preço > 100);
    res.json(produtosCaros);
});



app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

