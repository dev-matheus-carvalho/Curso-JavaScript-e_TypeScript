// Global
function retornoFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornoFuncao('Matheus');
console.log(funcao());