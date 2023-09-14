function semRetorno(...array: Array<string>): void {
  console.log(array.join(' ').toUpperCase());
}

semRetorno('Matheus', 'Luan', 'Campos', 'de', 'Carvalho');

const pessoa = {
  nome: 'Matheus',
  sobrenome: 'Carvalho',
  idade: 26,

  exibirNome(): void {
    console.log(
      `Me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos `,
    );
  },
};

pessoa.exibirNome();
