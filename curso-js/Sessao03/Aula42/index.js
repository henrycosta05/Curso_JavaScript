/**
 * Atribuição por desestruturação de objetos
 */

const pessoa = {
    "nome":"luiz",
    "sobrenome":"miranda",
    "idade":30,
    "endereço":{
        "rua":"av brasil",
        "numero":420
    }
};

const getDados = pessoa;
console.log(getDados);
const {sobrenome,endereço:{rua},endereço} = pessoa;
console.log(sobrenome, rua, endereço);