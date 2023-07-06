let num1 = 9.548963;

// Arredonda pra baixo

let num2 = Math.floor(num1);
console.log(num2); // 9

// Arredonda pra cima

let num3 = Math.ceil(num1);
console.log(num3); // 10

// Arredonda o número para o mais próximo

let num4 = Math.round(num1);
console.log(num4);

// Encontra o maior número

console.log(Math.max(1, 2, 3, -10, 0.8, 120, 1.65));

// Encontra o menor número

console.log(Math.min(1, 2, 3, -10, 0.8, 120, 1.65));

// Gera números aleatórios

console.log(Math.random());

const aleatorio = Math.random() * (10 - 5) + 5; // Gera número de 5 a 10
console.log(aleatorio);