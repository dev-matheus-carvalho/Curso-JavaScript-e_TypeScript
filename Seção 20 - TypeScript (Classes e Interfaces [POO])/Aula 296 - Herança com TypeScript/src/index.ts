export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  //Polimorfismo

  getNomeCompleto(): string {
    return `Aluno: ${this.nome} ${this.sobrenome}`;
  }
}

export class Cliente extends Pessoa {
  //Polimorfismo

  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

//=======================================================================

const aluno = new Aluno('João', 'Alboquerque', 16, '185.934.910-22');
const cliente = new Cliente('Dr. Marcos', 'Faria', 52, '931.608.100-97');

console.log('=========================Aluno=========================');
console.log(aluno);
console.log(aluno.getNomeCompleto());
console.log(aluno.getIdade());
console.log(aluno.getCpf());

console.log();

console.log('=========================Cliente=========================');
console.log(cliente);
console.log(cliente.getNomeCompleto());
console.log(cliente.getIdade());
console.log(cliente.getCpf());
