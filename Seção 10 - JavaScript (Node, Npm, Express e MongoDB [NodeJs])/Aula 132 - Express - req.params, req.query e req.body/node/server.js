const express = require('express');
const app = express();

app.use(express.urlencoded( { extended: true } ));

//Get
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar formulárioss</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);

    // res.send(req.params);
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que me enviou foi:  ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Servidor rodando na porta 3000');
});