let num1 = prompt('Digite o primeiro número');
let num2 = prompt('Digite o segundo número');

console.log(`Os números digitados foram: ${num1} e ${num2}`);
console.log(`Os tipos de dados de num1 e num2 são: ${typeof num1} e ${typeof num2}`);

alert(`Convertendo os dados de String para Number`);

num1 = Number(num1);
num2 = Number(num2);

alert('Conversão realizada com sucesso!');

alert('Realizando a soma dos números digitados...');

let soma = num1 + num2;

alert(`A soma de ${num1} e ${num2} é: ${soma}`);
console.log(`A soma de ${num1} e ${num2} é: ${soma}`);
