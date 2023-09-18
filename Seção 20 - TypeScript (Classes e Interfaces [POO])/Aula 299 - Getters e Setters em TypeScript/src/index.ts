export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    // this.cpf = _cpf; -> Setter tbm
  }

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Matheus', 'Carvalho', 26, '195.408.710-18');
pessoa.cpf = '229.605.100-62';
console.log(pessoa.cpf);
