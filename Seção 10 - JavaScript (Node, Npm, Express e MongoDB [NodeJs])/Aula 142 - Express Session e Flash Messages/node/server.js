require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const sessionOptions = session({
    secret: 'j0luCFCUc4QAcj3UZ65019dafb7c00',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');
const { async } = require('regenerator-runtime');

app.use(express.urlencoded( { extended: true } ));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(middlewareGlobal);
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
