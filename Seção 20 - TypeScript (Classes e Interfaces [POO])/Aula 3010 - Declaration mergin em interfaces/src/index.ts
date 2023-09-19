//Declaration Merge
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: Array<string>;
}

interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Matheus',
  sobrenome: 'Carvalho',
  enderecos: ['Rua 123'],
  idade: 42,
};

pessoa.enderecos.push('Rua 456');
console.log(pessoa);
