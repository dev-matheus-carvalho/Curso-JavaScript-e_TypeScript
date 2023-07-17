const data = new Date();

console.log(data.toString());

const dataAtual = new Date().toLocaleDateString();
const horaAtual = new Date().toLocaleTimeString();
console.log(dataAtual, horaAtual);

const dia = new Date().getDate();
const mes = new Date().getMonth() + 1;
const ano = new Date().getFullYear();

const hora = new Date().getHours();
const minutos = new Date().getMinutes();
const segundos = new Date().getSeconds();
const milesimosDeSegundos = new Date().getMilliseconds();

console.log(`O dia de hoje é: ${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}:${milesimosDeSegundos}`);