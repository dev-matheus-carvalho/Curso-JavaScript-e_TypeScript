function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(new TypeError);
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promises');
            return;
        }, tempo);
    });
}

/*

Promises.all
Promise.race
Promise.resolve
Promise.reject

*/

const promises = [
    // 'Primeiro valor', 
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // esperaAi(1000, rand(1, 1)),
    // 'Outro valor'

];

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei o cache', 3000);
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(error => console.log(error));


// Promise.all(promises).then(valor => {
//     console.log(valor);
// }).catch(error => {
//     console.log('Erro');
//     console.log(error);
// });

// Promise.race(promises).then(valor => {
//     console.log(valor);
// }).catch(error => {
//     console.log('Erro');
//     console.log(error);
// });
