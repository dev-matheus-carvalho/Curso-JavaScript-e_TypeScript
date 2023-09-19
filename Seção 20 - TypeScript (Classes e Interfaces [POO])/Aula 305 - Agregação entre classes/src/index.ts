export class CarrinhoDeCompras {
  private readonly produtos: Array<Produto> = [];

  inserirProduto(...produtos: Array<Produto>): void {
    for (const camiseta of produtos) {
      this.produtos.push(camiseta);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, camiseta) => soma + camiseta.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const camiseta = new Produto('Camiseta', 49.9);
const caneca = new Produto('Caneca', 15);
const caneta = new Produto('Caneta', 3.5);

const carrinho = new CarrinhoDeCompras();

carrinho.inserirProduto(camiseta, caneca, caneta);

console.log(carrinho);
console.log(carrinho.quantidadeProdutos());
console.log(carrinho.valorTotal());
