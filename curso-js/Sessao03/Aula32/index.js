/*
* && -> todas expressões precisam ser verdadeira
* || -> Todas as expressões precisam ser falsas
*
*
*
*/


function falaOi(){
    return "oi"
}

let vaiexecutar = 1;

console.log(vaiexecutar || falaOi())

console.log(NaN || false || 'luiz otavio' || '')

console.log(NaN && false && 'luiz otavio' && '')

const corUsuario = '';
let corPadrao = corUsuario || 'preto';

console.log(corPadrao);