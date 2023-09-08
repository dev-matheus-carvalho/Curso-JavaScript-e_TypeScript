// module.exports = function (x = 0, y = 0) {
//     return x * y;
// }

module.exports = class Dog {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está latindo au, au ...`);
    }
}