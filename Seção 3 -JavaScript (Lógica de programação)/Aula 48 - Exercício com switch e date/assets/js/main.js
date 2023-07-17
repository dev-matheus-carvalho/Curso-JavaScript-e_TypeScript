const resultado = document.querySelector('.resultado');
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

resultado.innerHTML = Intl.DateTimeFormat('pt-BR', opcoes).format(data);

  






/*     OPÇÃO MAIOR



const diaDaSemana = function () {
    const data = new Date();

    const diaSemana = data.getDay();

    switch(diaSemana){
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-Feira';
        case 2:
            return 'Terça-Feira';
        case 3:
            return 'Quarta-Feira';
        case 4:
            return 'Quinta-Feira';
        case 5:
            return 'Sexta-Feira';
        case 6:
            return 'Sábado';
        default:
            return 'Semana não encontrada';
    }
    
};

 const mesAtual = function () {
    const data = new Date();

    const mes = data.getMonth() + 1;

    switch(mes){
        case 1:
            return 'janeiro';
        case 2:
            return 'fevereiro';
        case 3:
            return 'março';
        case 4:
            return 'abril';
        case 5:
            return 'maio';
        case 6:
            return 'junho';
        case 7:
            return 'julho';
        case 8:
            return 'agosto';
        case 9:
            return 'setembro';
        case 10:
            return 'outubro';
        case 11:
            return 'novembro';
        case 12:
            return 'dezembro';
        default:
            return 'Mês não encontrado'
    }
 };

 const hoje = function () {
    const data = new Date();

    const semana = diaDaSemana();
    const dia = data.getDate();
    const mes = mesAtual();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();

    return `${semana}, ${dia} de ${mes} de ${ano} - ${hora}:${minutos.toString().padStart(2, '0')}`;
 };

 function setResultado(){
    const resultado = document.querySelector('.resultado');
    return resultado.innerHTML = hoje();
 }

// diaDaSemana();
// alert(hoje());

setResultado();

*/