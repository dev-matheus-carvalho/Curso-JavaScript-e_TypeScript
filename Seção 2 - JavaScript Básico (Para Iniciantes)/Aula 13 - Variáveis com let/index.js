/*

=====================As 10 regras fundamentais======================

1 - Não se pode criar variáveis com palavras reservadas
2 - Variáveis precisam ter nomes significativos
3 - Não pode iniciar o nome de uma variável com um número
4 - Não podem conter espaços ou traços
5 - Utiliza-se camelCase
6 - São Case-sensitive (nomeCliente != nomecliente)
7 - Não podemos redeclarar uma variável com let
8 - Não utilize var, utilize let
9 - Não se pode declarar uma variável sem let, var ou const
10 - Podemos apenas atribuir valores a variáveis inicializadas

====================================================================
*/

let nome = 'Matheus Carvalho';
let curso = 'Engenharia Mecatrônica'


console.log(nome, 'nasceu em 1996');
console.log('Em 2014 concluiu o Ensino Médio');
console.log(nome, 'passou na faculdade em 2018');
console.log('Em 2023,', nome, 'se formou em', curso);


let x;           // Variável que não tem valor
console.log(x); // Resultado: undefined

x = 'Valor 1'; // Inicializa a variável
console.log(x);

x = 'Valor 2'; // Atribui outro valor a variável
console.log(x);
