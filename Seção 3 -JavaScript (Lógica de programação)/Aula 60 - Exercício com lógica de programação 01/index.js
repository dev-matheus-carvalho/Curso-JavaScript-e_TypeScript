// Escreva uma função que recebe 2 números e retorne o maior deles

function comparador (num1, num2) {
    const vetorDeNumeros = [num1, num2];
    const maiorNumero = Math.max(...vetorDeNumeros);
    return `O maior número entre ${num1} e ${num2} é: ${maiorNumero}`;
}

let num1;
let num2;
let usuario;

//=================================Foma 1================================

console.log('========================================');
console.log('Forma 1');
num1 = 50;
num2 = 10
usuario = comparador(num1, num2);
console.log(usuario);
console.log('========================================');

//=================================Foma 2================================
function comparador2 (num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log('Forma 2');
num1 = 30;
num2 = 24;
usuario = comparador2(num1, num2);
console.log(`O maior número entre ${num1} e ${num2} é: ${usuario}`);
console.log('========================================');

//=================================Foma 3================================
console.log('Forma 3');
num1 = 90;
num2 = 47;
comparador3 = (num1, num2) => num1 > num2 ? num1 : num2;
usuario = comparador3(num1, num2);
console.log(`O maior número entre ${num1} e ${num2} é: ${usuario}`);
console.log('========================================');

