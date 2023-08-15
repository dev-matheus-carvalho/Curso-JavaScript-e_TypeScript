// Produto -> aumento e desconto
// Camiseta = Cor | Caneca = Material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype.aumento = function(porcentagem) {
    this.preco = this.preco + (this.preco * (porcentagem / 100));
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco); // Herança
    this.material = material;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {

        enumerable: true,
        configurable: false,

        get: function() {
            return estoque;
        },

        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype); // Linco o prototype de Produto em Caneca
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Genérico', 1234);
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 15, 'Porcelana', 20);

console.log(produto);
console.log(camiseta);
console.log(caneca);