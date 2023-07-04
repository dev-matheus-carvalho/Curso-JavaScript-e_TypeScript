/*

Aritméticos

+ Soma ou concatenação
- Subtração
* Multiplicação
/ Divisão
** Potenciação
% Resto da divisão

*/

// Variáveis globais

const num1 = 5;
const num2 = 10;
const num3 = '5';
const num4 = 2;
const num5 = 3;


//Soma
const soma = num1 + num2;
const concat = num2 + num3;

console.log(`A soma de num1 e num2 é: ${soma}`);
console.log(`A concatenação de num2 e num3 é: ${concat}`);

// Subtração

const subtracao = num2 - num1;
console.log(`A subtração de num2 e num1 é: ${subtracao}`);

//Multiplicação

const multiplicacao = num1 * num2;
console.log(`A multiplicação de num1 e num2 é: ${multiplicacao}`);

//Divisão

const divisao = num2 / num1;
console.log(`A divisão de num2 e num1 é: ${divisao}`);

//Potenciação

const potenciacao = num1 ** num4;
console.log(`A potencia de num1 a num4 é: ${potenciacao}`);

// Resto da divisão

const resto = num2 % num5;
console.log(`O resto da divisão de num2 e num5 é: ${resto}`);

/*

Precedência dos operadores

1 - Parênteses ()
2 - Potenciação **
3 - Multiplicação *
4 - Divisão /
5 - Resto da divisão %
6 - Soma +
7 - Subtração -

*/

const operacao1 = (num2 - num1) ** num4;
console.log(`O resultado da operação é: ${operacao1}`);

/*

Incrementação e Decrementação

++ Conta mais um
-- Subtrai mais um

*/

let contador = 1;
let passo = 50;

contador++;
console.log(`O resultado da incrementação é: ${contador}`);

contador += passo;
console.log(`O resultado do passo é: ${contador}`); //52


// NaN

const nome = 'Matheus';
let idade = 26;
const operacao2 = nome * idade;

console.log(`O resultado de nome * idade é de: ${operacao2}`)

// Conversão

const num6 = '5';
console.log(`O tipo primitivo de num6 é: ${typeof num6}`);

const conversaoNum6 = parseInt(num6);
console.log(`O tipo primitivo de conversaoNum6 é: ${typeof conversaoNum6}`);

const num7 = '3';
const conversaoNum7 = Number(num7);
console.log(`O tipo primitivo de conversaoNum7 é: ${typeof conversaoNum7}`);



