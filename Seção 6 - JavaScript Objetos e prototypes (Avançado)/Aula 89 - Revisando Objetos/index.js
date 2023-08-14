const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Carvalho'
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

const chave = 'nome';
console.log(pessoa[chave]);

//=========================================================================

const pessoa1 = new Object();
pessoa1.nome = 'Maria';
pessoa1.sobrenome = 'Oliveira';

delete pessoa1.nome;
console.log(pessoa1.sobrenome);


//=========================================================================

const pessoa2 = new Object();
pessoa2.nome = 'João';
pessoa2.sobrenome = 'Almeida';
pessoa2.idade = 32;
pessoa2.falarNome = function() {
    return (`${this.nome} está falando oi...`);
};

pessoa2.getDataNascimento = function() {
    const data = new Date();
    return data.getFullYear() - this.idade;
};

console.log(pessoa2.getDataNascimento());

//=========================================================================

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};

const p1 = criaPessoa('Mauricio', 'Andrade');

console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
};

const p2 = new Pessoa('Lívia', 'Alborquek');
// Object.freeze(p2);  Não deixa alterar o nome
p2.nome = 'Leila';

const p3 = new Pessoa('Ricardo', 'Dominic');


console.log(p2);
console.log(p3);