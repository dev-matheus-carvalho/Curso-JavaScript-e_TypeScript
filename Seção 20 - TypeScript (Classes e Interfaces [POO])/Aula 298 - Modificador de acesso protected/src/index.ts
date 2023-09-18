export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Array<Colaborador> = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  public getNome(): string {
    return this.nome;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa1 = new Udemy();

const colaborador1 = new Colaborador('Ricardo', 'de la Viera');
const colaborador2 = new Colaborador('Maria', 'del Bairro');
const colaborador3 = new Colaborador('Antonio', 'Alvares Toledo Fontes Real');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
console.log('================================');
empresa1.mostrarColaboradores();
console.log('================================');
console.log(empresa1.getNome());
console.log('================================');
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log();
console.log(empresa1);
