const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))

app.get('/',(req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar dados</button>
    </form>
    `);
})

app.get("/testes/:idUsuarios?/:likes?", (req,res) => {
    console.log(req.params);
    console.log(req.query );
    res.send(req.query.likes)
})


app.post('/',(req, res) => {
    console.log(req.body);
    res.send(`foi enviado: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});