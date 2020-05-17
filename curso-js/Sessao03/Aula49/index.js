// const nome = 'luz otavio';

// for (let i of nome){
//     console.log(i)
// }


const nomes = ['otavio','davi','marcelo'];

for (let i = 0 ; i < nomes.length; i++){
    console.log(i,nomes[i])
}

console.log('#####');

for (let a in nomes){
    console.log(a, nomes[a]);
}

console.log('#####');

for (let b of nomes){
    console.log(b) //Este não exibe índices
}

console.log('#####');

nomes.forEach( function (k,j,arr) {
    console.log(j,k,arr)
})