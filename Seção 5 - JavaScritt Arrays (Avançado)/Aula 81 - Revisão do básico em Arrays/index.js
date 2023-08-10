// const frutas = new Array('Banana', 'Maça', 'Uva');

const nomes = ['Eduarda', 'João', 'Maria'];

nomes[2] = 'Matheus'; // Altera o nome de Maria para Matheus
console.log(nomes);

delete nomes[2]; // Remove o nome Matheus sem alterar o índice
console.log(nomes);

nomes[2] = 'Matheus';
console.log(nomes);

const novo = [...nomes]; // Copia o array de nomes sem que tenham ligação um com o outro
novo.pop(); // Exclui o último índice
console.log(`Array novo: ${novo}`);

console.log('==============================Shift==============================');
const removido = nomes.shift();
console.log(nomes, removido);
console.log(nomes.length);

console.log('==============================Push==============================');
nomes.push('Ricardo');
nomes.push('Wallace');
console.log(nomes);

console.log('==============================Unshift==============================');
nomes.unshift('Vera');
console.log(nomes);

console.log('==============================Slice==============================');
const novo1 = nomes.slice(1, 3); // Pega do índice 1 até o índice 2
const novo2 = nomes.slice(0, -1);
console.log(novo1);
console.log(novo2);

console.log('================Transforma uma String em um Array=================');
const usuario = 'Matheus Luan Campos de Carvalho';
const meuArray = usuario.split(' ');
console.log(meuArray);

console.log('================Transforma um Array em uma String=================');
const usuario1 = ['Matheus', 'Luan', 'Campos', 'de', 'Carvalho'];
const minhaString = usuario1.join(' ');
console.log(minhaString);