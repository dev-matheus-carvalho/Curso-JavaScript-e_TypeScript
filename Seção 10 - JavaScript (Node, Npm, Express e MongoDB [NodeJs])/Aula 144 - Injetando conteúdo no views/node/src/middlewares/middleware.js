exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavalLocal = 'Este é o valor da variável local.';
    next();
}