// const azul = function() {
//     document.addEventListener('click', function() {
//         document.body.style.backgroundColor = 'blue';
//     });
// }

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Matheus', 'Carvalho');
console.log(p1.nome, p1.sobrenome);

const p2 = {nome: 'Luiz', sobrenome: 'Alberto'};
console.log(criaPessoa(p2.nome, p2.sobrenome));



function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo');


function criaMultiplicador(multiplicador) {
    return function(numero){
        return numero * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

