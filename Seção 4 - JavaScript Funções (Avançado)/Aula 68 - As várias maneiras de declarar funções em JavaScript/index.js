// Declaração de função

falaOi();
function falaOi(){
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe)
// Function Expression

const souUmDado = function () {
    console.log('Sou um dado');
}

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

// Arrow Function

const arrowFunction = () => {
    console.log('Sou uma arrow function');
};

arrowFunction();

// Dentro de um objeto

const obj = {
    falar(parametro) {
        console.log('Estou falando...');
        return console.log(parametro);
    }
};

obj.falar('oi');