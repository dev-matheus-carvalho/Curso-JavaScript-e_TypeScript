let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2); // transformando em String temporariamente

num1 = num1.toString(); // Transforma em String permanentemente
console.log(typeof num1);

let num3 = 1500;
num3 = num3.toString(2) // Transforma em binário

console.log(num3);

let num4 = 10.87515608548624;
console.log(num4.toFixed(2)); 
// Conta duas casas decimais após a vírgula e arredenda o decimal


let num5 = 10;
console.log(Number.isInteger(num5)); 
// Verifica se é número inteiro

let temp = num5 * 'olá';
console.log(Number.isNaN(temp)); // Pergunta se o resultado é NAN

let num6 = 0.1;
let num7 = 0.7;
let soma1 = num6 + num7;

console.log(soma1); // 0.799999999999

num7 += num6;
num7 += num6;
num7 += num6;

console.log(num7); // 0.9999999999999999

let arredonda = parseFloat(num7.toFixed(2));
console.log(arredonda); // 1