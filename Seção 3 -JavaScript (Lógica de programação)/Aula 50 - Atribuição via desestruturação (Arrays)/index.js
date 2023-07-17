const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, resto);

const [um, , tres, , cinco, ,sete] = numeros;
console.log(um, tres, cinco, sete);

const numeros1 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros1[1][2]); //6