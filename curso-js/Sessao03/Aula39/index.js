// const data = Math.round(+new Date / 1e3);

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}


function formulaData(data){
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const dia = zeroAEsquerda(data.getDate());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date('2020-04-07T20:19:18');

console.log('Dia: '+ data.getDay() );
console.log('Mês: '+ data.getMonth()+1 );
console.log('Ano: '+ data.getFullYear() );
console.log('Hora: '+data.getHours() );
console.log('Min: '+data.getMinutes() );
console.log('Seg: '+data.getSeconds() );
console.log('ms: '+data.getMilliseconds() );
console.log('Dia da Semana: '+data.getDay() );
console.log('String: '+data.toString() );
console.log(data.getDate());
console.log(Date.now())



const data1 = new Date(1586309569329);
console.log(data1.toString())

const dataBrasil = formulaData(data);
console.log(`dataBrasil: ${dataBrasil}`);