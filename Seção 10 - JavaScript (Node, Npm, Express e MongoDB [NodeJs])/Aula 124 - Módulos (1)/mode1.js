// const nome = 'Matheus';
// const sobrenome = 'Carvalho';

// const falaNome = () => `${nome} ${sobrenome}`;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// this.qualquerCoisa = 'O que eu quiser exportar';

// // console.log(module.exports);

//================================================================

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Matheus';
const sobrenome = 'Carvalho';

module.exports = { nome, sobrenome, Pessoa }