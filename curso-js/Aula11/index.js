let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log([varA, varB, varC] = [varB, varC, varA])

console.log(varA, varB, varC);
let tempVarA = varA;
varA = varB;
varB = varC;
varC = tempVarA;
// varC = '';


console.log(varA, varB, varC);




// var batman = 7;
// var superman = batman;   //assign-by-value
// superman++;
// console.log(batman,superman);     //7
// console.log(superman);   //8