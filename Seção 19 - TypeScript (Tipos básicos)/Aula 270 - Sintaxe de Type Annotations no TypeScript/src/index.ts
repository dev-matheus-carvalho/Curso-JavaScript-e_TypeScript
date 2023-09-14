/* eslint-disable */
let nome: string = 'Matheus';

// Tipos básicos (aqui ocorre inferência de tipos)
let nomeCompleto: string = 'Matheus Carvalho'; // Qualquer string
let idade: number = 26; // 10, 1.75, -2.384 ...
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('Qualquer symbol'); // symbol
// let big: bigint = 10n; // bigint


//===========================Array==================================

let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayDeNumeros1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayDeString: Array<string> = ['Matheus', 'Maria', 'José'];

//===========================Objects=================================

//                         A ? Deixa o campo como opcional
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 26,
  nome: 'Matheus Carvalho'
};

console.log(pessoa.nome);


//===========================Functions=================================

function soma(x: number, y: number): number {
  return x + y;
}

const result: number = soma(2, 4);

const soma2: (x: number, y: number) => number = (x, y) => x+ y;
