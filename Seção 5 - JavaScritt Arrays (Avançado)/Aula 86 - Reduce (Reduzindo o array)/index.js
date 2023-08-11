// 1 - Some todos os números (Reduce)
// 2 - Retorne um array com os pares (Filter)
// 3 - Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// 1 - Some todos os números (Reduce)
const total = numeros.reduce(function(acumulador, valor){
    acumulador += valor; 
    return acumulador;
}, 0);

console.log(total);

// 2 - Retorne um array com os pares (Filter)
const parReduce = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []); // <- (Mesma coisa) -> const acumulador = [];

const parFilter = numeros.filter(valor => {
    if (valor % 2 === 0) return valor;
});

console.log(parReduce);
console.log(parFilter);

// 3 - Retorne um array com o dobro dos valores (Map)
const dobroReduce = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor * 2);
    return acumulador
}, []);

const dobroMap = numeros.map(valor => valor * 2);

console.log(dobroReduce);
console.log(dobroMap);

//=========================================================================

// 1 - Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Matheus', idade: 26},
    {nome: 'Luiz', idade: 32},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Wallace', idade: 47},
];

const pessoas1 = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pessoas1);