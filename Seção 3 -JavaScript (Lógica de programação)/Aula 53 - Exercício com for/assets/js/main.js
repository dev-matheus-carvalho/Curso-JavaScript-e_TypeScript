const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];

    let tagCriada = document.createElement(tag);
    // console.log('Tag' + tagCriada);

    let textoCriado = document.createTextNode(texto);
    // console.log('Texto' + textoCriado.nodeValue);

    tagCriada.appendChild(textoCriado);

    div.appendChild(tagCriada);
    // console.log('div' + div.nodeValue);
}

container.appendChild(div);

// container.append(div.innerHTML = 'Cria a div e o conteúdo dela');
