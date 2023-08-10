const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retorne os números maiores que 10
const numerosFiltados = numeros.filter(valor => valor > 10);

console.log(numerosFiltados);

// 1 - Retorne as pessoas que têm o nome com 5 letras ou mais
// 2 - Retorne as pessoas com mais de 50 anos
// 3 - Retorne as pessoas cujo nome termina com a
// 4 - Retorne a pessoa com o nome Matheus
// 5 - Encontrar o índice do Luiz

const pessoas = [
    {nome: 'Matheus', idade: 26},
    {nome: 'Luiz', idade: 32},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Wallace', idade: 47},
];

// 1 - Retorne as pessoas que têm o nome com 5 letras ou mais
const pessoas1 = pessoas.filter(obj => obj.nome.length > 5);
console.log(pessoas1);

// 2 - Retorne as pessoas com mais de 50 anos
const pessoas2 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoas2);

// 3 - Retorne as pessoas cujo nome termina com a
const pessoas3 = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoas3);

// 4 - Retorne a pessoa com o nome Matheus
const pessoas4 = pessoas.filter(obj => obj.nome === 'Matheus');
console.log(pessoas4);

// 5 - Encontrar o índice do Luiz
const pessoas5 = pessoas.findIndex(pessoa => pessoa.nome === 'Luiz');;
console.log(pessoas5);
