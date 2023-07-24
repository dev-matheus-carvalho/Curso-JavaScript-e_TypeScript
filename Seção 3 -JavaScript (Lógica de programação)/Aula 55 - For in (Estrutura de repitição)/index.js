const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Matheus', 
    sobrenome: 'Carvalho', 
    idade: 26
};

console.log('----------------------');

for (let i in pessoa) {
    console.log(`Chave: ${i}`);
    console.log(`Valor: ${pessoa[i]}`);
    console.log('----------------------');
}