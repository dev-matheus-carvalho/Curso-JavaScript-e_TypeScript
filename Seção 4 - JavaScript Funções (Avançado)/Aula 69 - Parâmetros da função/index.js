function funcao() {

    let total = 0;

    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2(a, b, c, d, e) {
    console.log(a, b, c, d, e);
}

funcao2(1, 2, 3); // Saída: 1, 2, 3, undefined, undefined



function soma(a, b = 2, c = 4) {
    console.log(a + b + c);
}

soma(2, undefined, 20);


// Via desestruturação

function pessoa({ nome, sobrenome, idade }){
    console.log(nome, sobrenome, idade);
}

let obj = { nome: 'Matheus', sobrenome: 'Carvalho', idade: 26};
pessoa(obj);

function vetor([ valor1, valor2, valor3 ]) {
    console.log(valor1, valor2, valor3);
}

let vet = [1, 2, 3];
vetor(vet);


function conta(operador, acumulador, ...numeros){
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);
conta('-', 0, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);
conta('/', 10000000, 20, 30, 40, 50);
