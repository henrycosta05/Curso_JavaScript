/*
*arrays são indexados por elemento
*um array pode conter qualquer tipo de dado
*/
const alunos = ["joão", "maria", "luiz"]; 
alunos.push('luana','fabio');

console.log(alunos.slice(4,5));

console.log(alunos[1]); //acessa o segundo elemento do array
console.log(alunos[2]); //acessa o terceiro elemento do array

alunos[0] = 'Eduardo'; //como este item já existe, o array será alterado

alunos[3] = "joana"; //como este elemento não existe, ele será criado no array

console.log(alunos.length); //informa o tamanho do array


console.log(alunos);

alunos.unshift("luiza"); //adiciona no começo

console.log(alunos);

console.log(alunos.pop()); //remove no final do array

console.log(alunos);

alunos.shift(); //remove elemento do começo do array
console.log(alunos);

console.log(alunos instanceof Array); //checa se é array