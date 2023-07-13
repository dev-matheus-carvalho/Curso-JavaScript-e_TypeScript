/*

Avaliação em curto circuito

Falsy

1 - false
2 - 0
3 - '', "", ``
4 - null
5 - undefined

Ao você fazer um comparador com um operador lógico, ele retorna o
valor que não é um falsy, caso contrário ele voltará o último
valor falsy

*/

//=============================Com operador E==========================

function falaOi() {
    return oi;
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi); // Retorna false

// Exemplo de login

const usuário = 'Matheus';
const senha = '1a5sdc4cd5s4'

console.log(usuário && senha); // Volta a senha


//============================Com operador ou==========================

console.log(0 || false || null || 'Matheus' || true); // Retorna Matheus
console.log(0 || false || null || true || 'Matheus'); // Retorna true