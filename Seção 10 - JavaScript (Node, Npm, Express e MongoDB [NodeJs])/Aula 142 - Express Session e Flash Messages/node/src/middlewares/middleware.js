exports.middlewareGlobal = (req, res, next) => {
    
    // if(req.body.cliente) {
    //     req.body.cliente = req.body.cliente.replace('Campos', 'Use Carvalho');
    //     console.log();
    //     console.log(`Vi que você postou: ${req.body.cliente}`);
    //     console.log();
    // }

    next();
}