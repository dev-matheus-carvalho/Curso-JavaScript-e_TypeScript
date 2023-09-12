const nome = 'Matheus';
const sobrenome = 'Carvalho';
const idade = 27;
const cpf = 123456789;

function soma(x = 0, y = 0) {
    return x + y;
}

function operacao() {
    return cpf - 123456789;
}

export default (x = 0, y = 0) => x * y;

export { nome, sobrenome, idade as velhice, soma, operacao};