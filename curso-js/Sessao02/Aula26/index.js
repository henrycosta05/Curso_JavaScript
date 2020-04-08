// const pessoa = {
//     nome: "luiz",
//     sobrenome: "miranda",
//     idade:25
// };

// console.log(pessoa);
// console.log(pessoa.nome);

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('maria','josefina',44);
const pessoa2 = criaPessoa('joao','alcantara',81);

console.log(pessoa1.nome, pessoa2.idade);
