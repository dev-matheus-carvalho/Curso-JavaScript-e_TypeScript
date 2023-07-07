// Objeto de forma geral

const pessoaObject = {
    nome: 'Matheus',
    sobrenome: 'Carvalho',
    idade: 26
};

console.log(pessoaObject.nome);
console.log(pessoaObject.sobrenome);
console.log(pessoaObject.idade);


// Unindo função com objetos

function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Peter', 'Van Haumen', 33);
const pessoa2 = criaPessoa('Alexei', 'Volkoff', 64);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);


// Unindo objeto a função

const pessoa3 = {
    nome: 'Matheus',
    sobrenome: 'Carvalho',
    idade:26,

    fala (){
        console.log(`A idade atual de ${this.nome} é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();

pessoa3.fala();
pessoa3.incrementaIdade();