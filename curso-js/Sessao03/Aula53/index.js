//escreva uma função que receba 2 números e retorne o maior entre eles


//função normal
function retonaMaior(x,y) {
    return Math.max(x,y);
}

console.log(retonaMaior(100,20));


//Utilizando arrow function
const max2 = (x,y) => x > y ? x :y;


console.log(max2(1,2))