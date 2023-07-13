

/*

Entre 0 - 11 (Bom dia)
Entre 12 - 17 (Boa tarde)
Entre 18 - 23 (Boa noite)

*/

const hora = 50;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else {
    console.log('Horário não definido');
}

const novaHora = 15;
const bomDia = novaHora >= 0 && novaHora <= 11;
const boaTarde = novaHora >= 12 && novaHora <= 17;
const boaNoite = novaHora >= 18 && novaHora <= 23;

if (bomDia){
    console.log('Bom dia');
} else if (boaTarde){
    console.log('Boa tarde')
} else if (boaNoite) {
    console.log('Boa noite');
} else {
    console.log('Horário não definido 2');
}