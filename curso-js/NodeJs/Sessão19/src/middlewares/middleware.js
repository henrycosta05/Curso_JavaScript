module.exports = (req, res, next) =>{
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