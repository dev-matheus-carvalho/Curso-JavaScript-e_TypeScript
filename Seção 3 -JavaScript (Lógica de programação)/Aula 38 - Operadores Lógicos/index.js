/*

Operadores Lógicos

&& -> And (E)
|| -> Or (Ou)
! -> Not (Não)

*/

const tenhoDinheiro = true;

const tempoEnsolarado = true;
const sorveteria = tenhoDinheiro && tempoEnsolarado;

console.log(`Posso ir a sorveteria? ${sorveteria}`);

const cinemaAberto = true;
const restauranteAberto = false;

const encontro = cinemaAberto || restauranteAberto;
console.log(`Posso ir ao encontro? ${encontro}`);


const capacete = false;
const equipamento = true;
const patins = true;
const andarDePatins = capacete && equipamento && patins;

console.log(`Posso andar de patins? ${andarDePatins}`);


const caminhoA = true;
const caminhoB = false;
const caminhoC = false;
const caminhoPraCasa = caminhoA || caminhoB || caminhoC;

console.log(`Tem como eu voltar pra casa? ${caminhoPraCasa}`);

console.log(!true)