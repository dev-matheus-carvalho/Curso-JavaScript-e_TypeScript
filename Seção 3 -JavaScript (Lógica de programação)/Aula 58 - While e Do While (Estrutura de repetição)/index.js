let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

const nome = 'Matheus';
let j = 0

// while (j < nome.length) {
//     console.log(nome[j]);
//     j++;
// }

function radom(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = radom(min, max);
rand = 10

while(rand !== 10) {
    rand = radom(min, max);
   console.log(rand);
}

do {
    rand = radom(min, max);
   console.log(rand);
} while (rand !== 10);