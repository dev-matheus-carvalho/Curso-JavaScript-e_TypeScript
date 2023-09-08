const path = require('path');

const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pesssoas = [
//     {nome: 'Matheus'},
//     {nome: 'João'},
//     {nome: 'Maria'}
// ];

// const json = JSON.stringify(pesssoas, '', 2);
// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(valor => console.log(valor.nome));

}

leArquivo(caminhoArquivo);

