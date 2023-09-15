// Tupla é um array de tamanho fixo e com variáveis definidas

// Essa tupla é imutável
const dadosClientes1: readonly [number, string] = [1, 'Matheus'];

// dadosClientes1[0] = 100;
// dadosClientes1[1] = 'Matheus Carvalho';

console.log(dadosClientes1);

//===========================================================================

const dadosClientes2: [number, string, string?] = [1, 'Matheus', 'Carvalho'];
console.log(dadosClientes2);

//===========================================================================

const dadosClientes3: [number, string, ...string[]] = [2, 'Pedro', 'Cabral'];
console.log(dadosClientes3);

//===========================================================================

const dadosClientes4: ReadonlyArray<string> = ['José', 'Maria'];
console.log(dadosClientes4);
