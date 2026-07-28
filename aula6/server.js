const express = require('express');
const app = express();

app.use(express.json());

let coxinha = [
    {id: 1, ingrediente: massa, preço: 35.00},
    {id: 2, ingrediente: frango, preço: 45.00}
]
//ex2

app.get ('/ ingrediente ', ( req , res ) => {
res.json ( ingrediente );
})

//ex3

let proID = 3;

app.get('/ingrediente/:id', (req, res) => {
    const id = number(req.params.id);
    const ingrediente = ingrediente.find(a => a.id === id)

    if(!ingrediente){
        return res.status(404).json({erro: "aluno não encontrado"})
    }

    res.json(ingrediente)

}