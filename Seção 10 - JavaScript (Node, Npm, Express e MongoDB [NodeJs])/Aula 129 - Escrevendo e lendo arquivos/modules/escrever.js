const fs = require('fs');

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { 
        flag: 'w'
    }, (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo:', err);
        } else {
            console.log('Arquivo foi escrito com sucesso!');
        }
    });
};

