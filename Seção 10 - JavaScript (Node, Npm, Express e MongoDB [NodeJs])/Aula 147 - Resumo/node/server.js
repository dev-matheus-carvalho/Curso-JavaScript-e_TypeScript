require('dotenv').config(); // Ambiente de desenvolvimento que não queira compartilhar

const express = require('express'); // Importa o express
const app = express(); // Inicia o express

// Inicia o Mongoose. Responsável por modelar o BD
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

const session = require('express-session'); // Identifica o usuário e salva os cookies
const MongoStore = require('connect-mongo'); // Assessões serão salvas dentro do BD
const flash = require('connect-flash'); // Mensagens auto destrutivas

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

const routes = require('./routes'); // Rotas da aplicação
const path = require('path');

// Segurança da aplicação
const helmet = require('helmet');
const csrf = require('csurf');

// Middleware globais
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
const { async } = require('regenerator-runtime');

app.use(express.urlencoded( { extended: true } )); // Pode postar formulários para dentro da aplicação
app.use(express.json()); // Ultiliza o json na nossa aplicação
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);
app.use(helmet());

app.set('views', path.resolve(__dirname, 'src', 'views'));// Arquivos estáticos na aplicação
app.set('view engine', 'ejs');

// Escuta o evento do BD
conectarBD();
app.on('Pronto!', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000');
        console.log('Servidor rodando na porta 3000');
    });
});
