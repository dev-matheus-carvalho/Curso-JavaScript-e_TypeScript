// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 100;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = 'Blue';
const corPadrao = corUsuario || 'Black';


console.log(nivelUsuario, corPadrao);