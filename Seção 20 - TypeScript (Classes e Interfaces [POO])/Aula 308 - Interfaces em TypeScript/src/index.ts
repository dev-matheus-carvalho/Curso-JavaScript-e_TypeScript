interface TipoNome {
  nome: string;
}

interface TipoSobreNome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomecompleto(): string;
}

// type TipoPessoa = TipoNome & TipoSobreNome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobreNome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomecompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Matheus', 'Carvalho');
console.log(pessoa.nomecompleto());
