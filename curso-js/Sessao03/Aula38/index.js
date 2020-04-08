/*operação ternária
*/

let pontuacaoUsuario = 999;
// let usuarioVip = null 
// if(pontuacaoUsuario >= 1000){
//     usuarioVip = true;
// } else{
//     usuarioVip = false;
// }


let usuarioVip = pontuacaoUsuario >= 1000 ? true : false;

console.log(usuarioVip);

/**
 * Aprendi também as condições que de && e ||
 */

 let userTheme = 'cor amarela'; //substituir por null
 let defaultTheme = userTheme || 'cor preta';

 console.log(defaultTheme);