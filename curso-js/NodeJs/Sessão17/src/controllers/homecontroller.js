const HomeModel = require( '../models/HomeModel' );

HomeModel.create( {
    title: 'Um título de testes(1)',
    description: 'Uma descrição de teste(1)'
} )
.then( dados => console.log(dados) )
.catch( e => console.log(e) );

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};

