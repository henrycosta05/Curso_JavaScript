const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     //rota e função (requisição e resposta)
//     res.send('Hello world!');

// });

// app.get('/',(req,res) => {
//     res.send('Obrigado por entrar em contato');
// })

app.get('/',(req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
})

app.post('/',(req, res) => {
    res.send("recebi o formulario");
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});