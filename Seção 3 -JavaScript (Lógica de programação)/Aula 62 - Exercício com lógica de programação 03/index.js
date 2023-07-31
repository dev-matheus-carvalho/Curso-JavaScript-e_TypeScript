/*

Escreva uma função que recebe um número e retorne o seguinte:

1. Checar se o número é um Number. Caso não seja, retorne NaN;
2. Número é divisivel por 3 = Fizz;
3. Número é divisivel por 5 = Buzz;
4. Número divisível por 3 e 5 = FizzBuzz;
5. Se não for divisivel por 3 e por 5 retorne o próprio número;
5. Use uma função com a função com números de 0 a 100

*/

function eUmNumero(variavel){
    return typeof variavel === 'number' ? true : false;
}

function eDivisilPorTres (numero) {
    const divisivelPorTres = numero % 3 === 0 ? true : false;
    return divisivelPorTres;
}

function eDivisilPorCinco (numero) {
    const divisivelPorTres = numero % 5 === 0 ? true : false;
    return divisivelPorTres;
}

function verificacao(numero){
    const eNumero = eUmNumero(numero);
    const divisivelPorTres = eDivisilPorTres(numero);
    const divisivelPorCinco = eDivisilPorCinco(numero);

    if (eNumero === false) return NaN;
    if (divisivelPorTres === false && divisivelPorCinco === false) return numero;
    if (divisivelPorTres === true && divisivelPorCinco === true) return 'FizzBuzz'
    if (divisivelPorTres) return 'Fizz';
    if (divisivelPorCinco) return 'Buzz';
}


const numero = 15;
// console.log(verificacao(numero));

for (let i = 0; i <= 100; i++){
    console.log(i, verificacao(i));
}
