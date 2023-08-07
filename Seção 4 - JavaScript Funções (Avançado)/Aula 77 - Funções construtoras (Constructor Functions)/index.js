function Pessoa(nome, sobrenome) {
    
    // Atributos privados
    const ID = 123456789;

    // Atributos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log('Sou um método');
    };
}

const p1 = new Pessoa('Matheus', 'Carvalho');
const p2 = new Pessoa('Maria', 'Joaquina');

console.log(p1.nome);
console.log(p1.sobrenome);

p2.metodo();
console.log(p2.ID);