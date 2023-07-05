const nome = prompt('Digite o seu nome completo');

document.body.innerHTML = `O seu nome completo é: ${nome} <br/>`;
document.body.innerHTML += `Seu nome possui ${nome.length} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br/>`;
document.body.innerHTML += `Qual o primeiro índice da letra 'a' no seu nome? ${nome.indexOf('a')} <br/>`;
document.body.innerHTML += `Qual o último índice da letra 'a' no seu nome? ${nome.lastIndexOf('a')} <br/>`;
document.body.innerHTML += `As últimas letras do seu nome são: ${nome.slice(-3)} <br/>`;
document.body.innerHTML += `As palavras de seu nome são: ${nome.split(' ')} <br/>`;
document.body.innerHTML += `Seu nome em letra maiúscula: ${nome.toUpperCase()} <br/>`;
document.body.innerHTML += `Seu nome em letra minuscula: ${nome.toLocaleLowerCase()} <br/>`;

// document.body.innerHTML += ` <br/>`;
// Matheus Luan Campos de Carvalho