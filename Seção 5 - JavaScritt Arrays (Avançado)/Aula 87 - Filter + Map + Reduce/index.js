// 1 - Retorne a soma do dobro de todos os pares
// 2 - Filtrar os números pares
// 3 - Dobrar os valores
// 4 - Reduzir (somar)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeros1 = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumumulador, valor) => acumumulador + valor);

console.log(numeros1);
