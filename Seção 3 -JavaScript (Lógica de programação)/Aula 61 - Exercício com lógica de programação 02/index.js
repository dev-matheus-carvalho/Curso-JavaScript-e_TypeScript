/*
Escreva uma função chamada ePaisagem que recebe dois argumentos: largura e altura de uma imagem (Number).

Retorne true se a imagem estiver no modo paisagem
*/

//=============================Foma 1==================================

function ePaisagem1(altura, largura){
    if (largura > altura){
        return true; 
    } else {
        return false;
    }
}

let altura;
let largura;
let usuario;

console.log('==============================================');
console.log('Foma 1');
altura = 500;
largura = 1000;
usuario = ePaisagem1(altura, largura);
console.log(usuario);
console.log('==============================================');


//=============================Foma 2==================================

console.log('Foma 2');
const ePaisagem2 = (altura, largura) => altura >= largura;
altura = 200;
largura = 100;
usuario = ePaisagem2(altura, largura);
console.log(usuario);
console.log('==============================================');

