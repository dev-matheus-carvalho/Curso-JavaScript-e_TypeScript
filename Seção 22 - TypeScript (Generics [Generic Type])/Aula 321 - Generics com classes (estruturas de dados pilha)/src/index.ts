export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

const pessoa1 = new Pessoa('Matheus', 26);
const pessoa2 = new Pessoa(['Matheus'], 26);

pessoa2.nome.push('Maria');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa2.nome[0]);
console.log(pessoa2.nome.length);

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.estaVazia()) return undefined;

    this.contador--;

    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];

    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha();

pilha.push(1);
pilha.push(1);
pilha.push(1);
pilha.push(1);
pilha.push(1);
pilha.push(1);

console.log('==============================');
pilha.mostrarPilha();
