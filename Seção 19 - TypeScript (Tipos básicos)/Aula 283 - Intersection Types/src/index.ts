type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  nome: 'Matheus',
  sobrenome: 'Carvalho',
  idade: 26,
};

console.log(pessoa);
