const express = require('express');
const app = express();
app.use(express.json());

let coxinhas = [
  { id: 1, ingrediente: "massa", preço: 30.00 },
  { id: 2, ingrediente: "frango", preço: 45.00 }
];

let proID = 3;

// ex2
app.get('/ingrediente', (req, res) => {
  res.json(coxinhas);
});

// ex3
app.get('/ingrediente/:id', (req, res) => {
  const id = Number(req.params.id);
  const coxinha = coxinhas.find(a => a.id === id);

  if (!coxinha) {
    return res.status(404).json({ erro: "ingrediente não encontrado" });
  }

  res.json(coxinha);
});

// ex4
app.post('/ingrediente', (req, res) => {
  const novoproduto = {
    id: proID,
    ingrediente: req.body.ingrediente,
    preço: req.body.preço
  };

  coxinhas.push(novoproduto);
  proID++;

  res.status(201).json(novoproduto);
});

// ex5
app.put('/ingrediente/:id', (req, res) => {
  const id = Number(req.params.id);
  const coxinha = coxinhas.find(a => a.id === id);

  if (!coxinha) {
    return res.status(404).json({ erro: "produto não encontrado" });
  }

  coxinha.ingrediente = req.body.ingrediente;
  coxinha.preço = req.body.preço;

  res.json(coxinha);
});

// ex6
app.delete('/ingrediente/:id', (req, res) => {
  const id = Number(req.params.id);
  const coxinha = coxinhas.find(a => a.id === id);

  if (!coxinha) {
    return res.status(404).json({ erro: "ingrediente não encontrado" });
  }

  coxinhas = coxinhas.filter(a => a.id !== id);

  res.json({ mensagem: "ingrediente removido com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});