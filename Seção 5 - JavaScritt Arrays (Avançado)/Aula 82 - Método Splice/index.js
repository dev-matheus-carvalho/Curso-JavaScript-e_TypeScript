//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//slipece(índice, delete, add elemento1, add elemento2...);

console.log('===================Remover elementos=========================');
console.log();
//pop();

// const removidos = nomes.splice(3, 2); // [ 'Gabriel', 'Julia' ]
// const removidos = nomes.splice(-1, 1); // [ 'Julia' ]
const removidos = nomes.splice(-2, Number.MAX_VALUE); // [ 'Gabriel', 'Julia' ]
console.log(nomes, removidos);
console.log();

console.log('===================Adiciona elementos=========================');
console.log();
//      0        1       2
// [ 'Maria', 'João', 'Eduardo' ]

const add = nomes.splice(1, 0, 'Matheus');
console.log(nomes, add); // [ 'Maria', 'Matheus', 'João', 'Eduardo' ] []

//      0          1        2        3
// [ 'Maria', 'Matheus', 'João', 'Eduardo' ]

const removeEAdd = nomes.splice(2, 1, 'Jane');
console.log(nomes, removeEAdd); // [ 'Maria', 'Matheus', 'Jane', 'Eduardo' ] [ 'João' ]

