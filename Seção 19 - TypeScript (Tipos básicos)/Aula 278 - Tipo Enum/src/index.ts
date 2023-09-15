enum Cores {
  VERMELHO, // 0
  AZUL,
  AMARELO,
}

console.log(Cores);

/*
=============================O que retorna==============================
{
  '0': 'VERMELHO',
  '1': 'AZUL',
  '2': 'AMARELO',
  VERMELHO: 0,
  AZUL: 1,
  AMARELO: 2
}

*/

console.log(Cores.VERMELHO); // 0
console.log(Cores[0]); // VERMELHO

enum Cores {
  Roxo = 'Roxo',
  Verde = 201,
  Rosa,
}

console.log(Cores);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(201); // VERDE
