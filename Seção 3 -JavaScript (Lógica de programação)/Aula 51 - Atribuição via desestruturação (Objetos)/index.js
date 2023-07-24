const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Carvalho',
    idade: 26,
    endereco: {
        rua: 'Rua dos Bobos',
        numero: 0
    }
};

console.log(pessoa);

//Atribuição via desestruturação

// const { nome: teste = '', sobrenome, data = 'Não informado' } = pessoa;
// console.log(teste, sobrenome, data);

// const { endereco: {rua, numero}, endereco } = pessoa;

// console.log(endereco, rua, numero);

const { nome, ...resto } = pessoa;
console.log(resto);

