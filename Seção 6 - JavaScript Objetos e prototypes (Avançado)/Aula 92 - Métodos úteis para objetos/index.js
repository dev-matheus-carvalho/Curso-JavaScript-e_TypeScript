/*

Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropetyDescriptor(o, 'prop')
...(spread)

==================================Já vimos================================

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.definePropeties (define várias propriedades)
Object.definePropity (define uma propriedade)

*/

const produto = {nome: 'Produto base', preco: 7.15};
const outraCoisa = { ...produto, material: 'plastico' };

outraCoisa.nome = 'Caneta';
outraCoisa.preco = 1.50;

console.log(produto);
console.log(outraCoisa);

const vaso = Object.assign({}, produto, {material: 'cerâmica'});
console.log(vaso);

//======================================================================

console.log(Object.keys(produto));

//======================================================================

const cadeira = {...produto, material: 'Madeira'};
cadeira.nome = 'Cadeira';
cadeira.preco = 20.68;
Object.freeze(cadeira);

cadeira.material = 'Porcelana';

console.log(cadeira);

//======================================================================

const mesa = {...produto};
mesa.nome = 'Mesa';
mesa.preco = 200;

Object.defineProperty(mesa, 'nome', {
    writable: false
});

console.log(Object.getOwnPropertyDescriptor(mesa, 'nome'));

//======================================================================

const sofa = {nome: 'Sofa', preco: 870};

console.log(Object.keys(sofa));
console.log(Object.values(sofa));
console.log(Object.entries(sofa));

for (let entry of Object.entries(sofa)) console.log(entry);
for (let [chave, valor] of Object.entries(sofa)) console.log(chave, valor);