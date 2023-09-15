let x = 10; // eslint-disable-line
x = 0b1010;

let a = 100 as const; // eslint-disable-line

const y = 10;

const pessoa = {
  nome: 'Matheus' as const,
  sobrenome: 'Carvalho',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Azul'));
