/*
* Aula sobre números e matematica
*
*/
let num1 = 9.41312;
let num2 = Math.floor(num1); //Math.floor >> arredonda o numero para baixo
let num3 = Math.ceil(num1); //Math.ceil >>Arredonda o numero para cima
let num4 = Math.round(num1); //arredonda o numero para o inteiro mais próximo
console.log(num2);
console.log(num3);
console.log(num4);

/*
*máximo e mínimo

*/

console.log(Math.max(10, 20, 30)); //exibe o marior valor de uma lista
console.log(Math.min(10, 20, 30)); //Exibe o menor valor de uma lista

const aleatorio = Math.random(Math.round() * (10 - 5) + 5); //Random gera números aleatórios, e nesta aplicação gera numeros aleatórios entre 0 e 1

console.log(aleatorio);