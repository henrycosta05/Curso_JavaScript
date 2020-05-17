exports.paginaInicial = (req, res) => {
    res.render( 'index' , {
        title: 'este será o título da página',
        summary: 'Este é o <span style="color: red;">resumo</span> da página',
        numero: [0,1,2,3,4,5,6,7,8,9]
    } );
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};

