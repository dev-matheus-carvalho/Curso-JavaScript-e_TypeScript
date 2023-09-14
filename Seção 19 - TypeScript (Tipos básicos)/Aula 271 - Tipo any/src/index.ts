// Utilize any apenas em ultimo caso
function showMessage(msg: any = 'Sou uma mensagem padrão') {
  return msg;
}

console.log(showMessage());
console.log(showMessage('Sou uma mensagem enviada pelo usuário'));

/*
Fuja sempre do ANY


            / _ \
           ( o.o )
            > ^ <


*/
