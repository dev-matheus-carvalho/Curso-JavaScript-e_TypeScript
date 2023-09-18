export class Pessoa {
  static idadePadrao = 0;
  static cpfPadra0 = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadra0);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadra0);
  }
}

const pessoa1 = new Pessoa('Matheus', 'Carvalho', 26, '195.408.710-18');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');

console.log(pessoa1);
console.log(pessoa2);

pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadra0);
