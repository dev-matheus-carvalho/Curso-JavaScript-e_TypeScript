exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar formulárioss</button>
        </form>
        `); 
}

exports.trataPost = (req, res) => {
    res.send('Ei! Sou a sua nova rota de POST');
};