for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}


// Conta de 2 em 2

for (let i = 0; i <= 10; i+= 2){
    console.log(i);
}

for (let i = 10; i >= 1; i--){
    console.log(i);
}

for (let i = 0; i <= 10; i++){
    const num = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, num);
}

const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}