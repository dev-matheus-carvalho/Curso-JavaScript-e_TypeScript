function saudacao() {
    console.log('Bom dia!');
}

saudacao();

// Com parâmetro

function funcaoComParametro(nome) {
    console.log(`Bom dia ${nome}`);
}

funcaoComParametro('Matheus');

// Função com retorno

function funcaoComRetorno(nome) {
    console.log('Eu te desejo um...');
    return `Bom diaaaa ${nome}`;
}

const variavel = funcaoComRetorno('Luiza');
console.log(variavel);

// Outro exemplo

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

let num1 = 2;
let num2 = 3;
const resultado = soma(num1, num2);

console.log(resultado);

// Caso o usuário não envie algum parâmetro

function somarSemParametro(x = -2, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(somarSemParametro());

// Função anônima

const raiz = function (num) {
    return num ** 0.5;
};

console.log(raiz(9));

// Arow function

const raiz2 = n => n ** 0.5;

console.log(raiz2(25));