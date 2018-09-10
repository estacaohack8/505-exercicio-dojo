const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('express-mongo-db');
const cors = require('cors');
const app = express();

app.use(cors ()); 

app.get('/lanches', (req, res) => {
    req.db.collection('lanches').find().toArray((erro, dados) => {
        if(!erro){
            return res.send({lanches: dados});
        }
        return res.status(500).send({erro: "Problema ao consultar o banco de dados"});
    });
});



app.post('/lanches/novo', (req, res) => {
    req.db.collection('lanches').insert(req.body, dados => {
        
        return res.send(dados);
    });
});

app.get('/lanches')





app.listen(5000, ()=>
{
    console.log("Serviço de cadastro está sendo executado");
});