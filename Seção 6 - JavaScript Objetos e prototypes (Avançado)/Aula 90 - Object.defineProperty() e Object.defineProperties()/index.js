function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,      // Mostra a chave
        value: estoque,       // Valor
        writable: false,     // Valor pode ser alterado?
        configurable: false // É configuravel?
    });

    Object.defineProperties(this, {        
        nome: {
            enumerable: true,      // Mostra a chave
            value: nome,          // Valor
            writable: false,     // Valor pode ser alterado?
            configurable: false // É configuravel?
        },
        preco: {
            enumerable: true,      // Mostra a chave
            value: preco,         // Valor
            writable: false,     // Valor pode ser alterado?
            configurable: false // É configuravel?
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
// delete p1.estoque; Não apaga pois o configurable está em falso
console.log(p1);
console.log(Object.keys(p1));