// const mod1 = require('./mode1');
// const falaNome1 = require('./mode1').falaNome;

// console.log(mod1.falaNome());
// console.log(falaNome1());
// console.log('=========================================');

// const {nome, sobrenome, falaNome} = require('./mode1');

// console.log(nome);
// console.log(sobrenome);
// console.log(falaNome());

//===============================================================

const path = require('path');
const axios = require('axios');

// const { Pessoa } = require('./mode1');
// const pessoa1 = new Pessoa('Matheus');
// console.log(pessoa1);

// axios('https://jsonplaceholder.typicode.com/users')
// .then(response => console.log(response.data))
// .catch(e => console.log(e));

const { Pessoa } = require('./mode1');

const pessoa1 = new Pessoa('Alvaro');

console.log(pessoa1);