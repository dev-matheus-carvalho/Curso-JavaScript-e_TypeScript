interface PessoaProtocolo<T = unknown, U = unknown> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Matheus',
  sobrenome: 'Carvalho',
  idade: 26,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 789,
};

const aluno3: PessoaProtocolo = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 35,
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
