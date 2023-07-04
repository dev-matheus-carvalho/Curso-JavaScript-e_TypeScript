/*

=====================As 10 regras fundamentais======================

1 - Não se pode criar constantes com palavras reservadas
2 - Constantes precisam ter nomes significativos
3 - Não pode iniciar o nome de uma constante com um número
4 - Não podem conter espaços ou traços
5 - Utiliza-se camelCase
6 - São Case-sensitive (nomeCliente != nomecliente)
7 - Não podemos modificar o valor de uma constante
8 - Não podemos inicializar uma constante sem um valor definido
9 - Não se pode declarar uma constante o const
10 - Podemos apenas atribuir valores a constantes inicializadas

====================================================================
*/

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;

console.log('O resultado da conta é:',resultado);

let resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

resultadoDuplicado = resultadoDuplicado + 2;
console.log(resultadoDuplicado);

// Descobrindo qual o tipo de dado
console.log('O tipo da constante primeiroNumero é:',typeof(primeiroNumero));

const num1 = '5';
const num2 = 10;
const resultadoFinal = num1 + num2; // String

console.log('O tipo da constante resultadoFinal é:',typeof resultadoFinal);
