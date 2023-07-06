const num = prompt('Digite um número');
const trasformaNum = Number(num);

document.body.innerHTML = `<h1> Seu número é ${trasformaNum} <h1/>`;
document.body.innerHTML += `A raíz quadrada é: <strong> ${trasformaNum ** (1/2)}<strong/><br/>`;
document.body.innerHTML += `O número ${num} é inteiro? <strong>${Number.isInteger(trasformaNum)}<strong/><br/>`;
document.body.innerHTML += `O número ${num} é NaN? <strong>${Number.isNaN(trasformaNum)}<strong/><br/>`;
document.body.innerHTML += `O número ${num} arredondado para cima: <strong>${Math.ceil(trasformaNum)}<strong/><br/>`;
document.body.innerHTML += `O número ${num} arredondado para baixo: <strong>${Math.floor(trasformaNum)}<strong/><br/>`;
document.body.innerHTML += `O número ${num} com duas casas decimais: <strong>${trasformaNum.toFixed(2)}<strong/><br/>`;