let varA = 'A';
let varB = 'B';
let varC = 'C';

/*

O desafio é inverter os valores de varA, varB e varC e que tais assumam os seguintes valores:

let varA = 'B';
let varB = 'C';
let varC = 'A';

*/

console.log(`Os valores atuais são: varA = ${varA}, varB = ${varB} e varC = ${varC}`);

// Tentativa 1

varA = varB; // B
varB = varC; // C
varC = varA; // B

console.log(`Os valores atuais após a 1ª tentativa são: varA = ${varA}, varB = ${varB} e varC = ${varC}`);

/*

Para a solução de tal exercício, faz se necessário o uso de um auxiliar para armazenar valores temporários. Vamos reiniciar com os valores atuais.

*/
varA = 'A';
varB = 'B';
varC = 'C';

console.log(`Os valores reiniciados são: varA = ${varA}, varB = ${varB} e varC = ${varC}`);

// Resolvendo o exercício

let aux = varA;

varA = varB; // B
varB = varC; // C
varC = aux;

console.log(`Com isso o exercício resolvido fica: varA = ${varA}, varB = ${varB} e varC = ${varC}`);

/*

Outra forma seria: [varA, varB, varC] = [varB, varC, varA]

*/

