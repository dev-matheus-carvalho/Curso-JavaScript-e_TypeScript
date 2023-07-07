/*

Primitivos (imutáveis): string, number, boolean, undefined, null, biginit e symbol

                        -> Eles são copiados <-
*/

let a = 1;
let b = a;

console.log(a, b); // 1 1

a = 2;

console.log(a, b); // 2 1

/*

Referência (mutáveis): array, object, function

        -> Não são copiados, pois apontam para um mesmo lugar na memória <-

*/

let c = [1, 2 , 3];
let d = c;

console.log(c, d); // [1, 2 , 3] [1, 2 , 3]

c.push(4);

console.log(c, d); // [1, 2 , 3, 4] [1, 2 , 3, 4]

d = [...c]; // Copia de fato os valores
c.pop();

console.log(c, d); // [1, 2 , 3] [1, 2 , 3, 4]
