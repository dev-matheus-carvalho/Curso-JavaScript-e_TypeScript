// const objA = {
//     chaveA: 'A'
// };

// const objB = {
//     chaveB: 'B'
// };

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);

// console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(porcentagem) {
    this.preco = this.preco - (this.preco * (porcentagem / 100));
};

Produto.prototype.aumento = function(porcentagem) {
    this.preco = this.preco + (this.preco * (porcentagem / 100));
};

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

console.log(p2);

const p3 = Object.create(Produto.prototype);
p3.preco = 113;
p3.aumento(10);

console.log(p3);

const p4 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },

    material: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Porcelana'
    }
});

p4.aumento(10);
console.log(p4);
