// const multiplicacao = require('./mod');
// console.log(multiplicacao(2, 3));

//=========================================================

// const Cachorro = require('./mod');
// const dog1 = new Cachorro('Spark');
// console.log(dog1);
// dog1.latir();

//=========================================================
const path = require('path');

console.log(path.resolve(__dirname));
console.log(path.resolve(__dirname, '..', '..', '..', '..', '..', 'Imagens', 'Arquivo de teste')); // Volta 2 pastas

// console.log(__filename);
// console.log(__dirname);