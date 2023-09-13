const { render } = require("ejs");

exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavalLocal = 'Este é o valor da variável local.';
    next();
};

exports.checkCsrfError = (error, req, res, next) => {
    if(error && 'EBADCSRFTOKEN' === error) {
        return res.render('404');
    };
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.local.csrfToken = req.csrfToken();
    next();
};