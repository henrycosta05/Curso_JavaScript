exports.meuMiddleware = (req, res, next) =>{
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local';
    
    console.log();
    console.log('Passei no middleware global');
    console.log();

    next();
}

// exports.meuMiddleware = (req, res, next) => {
//     res.locals.umaVariavelLocal = 'Este é o valor da variavel local';
//     next();
// };

exports.checkCsrfError = (err, req, res, next) => {
    if( err && err.code === 'EBADCSRFTOKEN' ){
        return res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};