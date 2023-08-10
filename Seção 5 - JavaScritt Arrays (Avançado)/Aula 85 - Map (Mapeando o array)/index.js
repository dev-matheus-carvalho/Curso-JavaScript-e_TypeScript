const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeros1 = numeros.map(valor => valor * 2);
console.log(numeros1);


// 1 - Retorne apenas string com o nome da pessoa
// 2 - Remova apenas a chave "nome" do objeto
// 3 - Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Matheus', idade: 26},
    {nome: 'Luiz', idade: 32},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Wallace', idade: 47},
];

// 1 - Retorne apenas string com o nome da pessoa
const pessoas1 = pessoas.map(obj => obj.nome);
console.log(pessoas1);

// 2 - Remova apenas a chave "nome" do objeto
const pessoas2 = pessoas.map(obj => obj.idade);
const pessoas3 = pessoas.map(obj => ({idade: obj.idade}));

console.log(pessoas2);
console.log(pessoas3);

// 3 - Adicione uma chave id em cada objeto
const pessoas4 = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});

console.log(pessoas);
console.log(pessoas4);