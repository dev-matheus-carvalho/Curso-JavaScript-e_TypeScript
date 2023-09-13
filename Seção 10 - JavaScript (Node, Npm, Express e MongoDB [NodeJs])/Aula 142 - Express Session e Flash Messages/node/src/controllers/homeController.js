exports.paginaInicial = (req, res) => {
    // req.session.usuario = {nome: 'Matheus', logado: true};
    // console.log(req.session.usuario = {nome: 'Matheus', logado: true});

    // req.flash('info', 'Olá mundo');
    // req.flash('error', 'Deu erro');
    // req.flash('success', 'Sucesso!');

    // console.log(req.flash('info'), req.flash('error'), req.flash('success'));
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};