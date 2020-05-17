exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar dados</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send("ei, sou sua nova rota de POST");
};

