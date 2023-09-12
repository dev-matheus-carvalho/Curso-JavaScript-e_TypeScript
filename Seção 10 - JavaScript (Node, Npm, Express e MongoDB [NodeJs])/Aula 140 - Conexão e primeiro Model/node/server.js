require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

// mongoose.connect(connectionString)
// .then(() => {
//     console.log('Conectei a base de dados');
//     app.emit('Pronto!')
// });

async function conectarBD() {
    try{
        await mongoose.connect(process.env.CONNECTIONSTRING);
        console.log('Conexão bem sucedida a Base de Dados');
        app.emit('Pronto!');
    } catch(error) {
        console.log();
        console.log('Erro ao conectar na Base de Dados');
        console.log();
        throw new Error(error);
    }
    
}

const routes = require('./routes');
const path = require('path');
const { async } = require('regenerator-runtime');

app.use(express.urlencoded( { extended: true } ));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

conectarBD();
app.on('Pronto!', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000');
        console.log('Servidor rodando na porta 3000');
    });
});