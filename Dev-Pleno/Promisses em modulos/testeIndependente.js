// const json = {
//   "range": "prevendas!A2:A1000",
//   "majorDimension": "ROWS",
//   "values": [
//     [
//       "PREORD001001"
//     ],
//     [
//       "PREORD001001"
//     ],
//     [
//       "PREORD001001"
//     ],
//     [
//       "PREORD001001"
//     ],
//     [
//       "PREORD001002"
//     ]
//   ]
// }



// function run(preOrderIdIncrementado, datetime,nomeUsuario, intencaoOrcamento, melhorContatoOrcamento, telefoneContato) {
//     let preOrderID = preOrderIdIncrementado;
//     datetime = datetime-03;
//     nomeUsuario = nomeUsuario;
//     // let tipoContato = melhorContatoOrcamento ;
//     let tipoContato = melhorContatoOrcamento.melhorContato ;
//     intencaoOrcamento = intencaoOrcamento;
//     telefoneContato = telefoneContato;
//     let json = {
//         "to":"agilizelabs%40gmail.com@mailgun.gw.msging.net",
//         "type":"text/plain",
//         "content":"O " + nomeUsuario + datetime +", solicitou um orçamento com as informações abaixo:\n\n" + intencaoOrcamento + "\n\nOs contatos inforamdos foram: " + telefoneContato + "\n via " + tipoContato + "\n\n\nAtenciosamente,\n" + "Assistente virtual\n" + "Pérola Carimbos e Papelaria",
//         "metadata": {
//           "mail.subject": "[" + preOrderID + "]" + " Nova solicitação de orcamento"
//         }
//      };
//     //let tipoContato = JSON.parse(melhorContatoOrcamento).melhorContato ;
    
//     return json ;
// }


// console.log( run('PREORD123','2020-04-02T01:02:03Z','joao','strass',{'melhorContato':'whatsapp'},'8349234924') )

let mydatetime = '2020-04-19T20:55:23Z';
mydatetime = new Array(mydatetime.split("T"));
mydatetime[0][1] = mydatetime[0][1].replace('Z','')
mydatetime[0][1] = new Array(mydatetime[0][1].split(":"));
mydatetime[0][1][0][0] = mydatetime[0][1][0][0]-3;
mydatetime[0][1][0] = mydatetime[0][1][0].join(':');
mydatetime[0] = mydatetime[0].join(' ');
// mydatetime = mydatetime.replace('Z','');
// let hourajust = mydatetime.split(" ")[1];
// hourajust = new Array(hourajust.split(":"));
// hourajust[0][0] = hourajust[0][0]-3;
// hourajust = hourajust[0].join(':');
// hourajust = mydatetime + hourajust
// hourajust = hourajust.substring(0,2) -3

///console.log(mydatetime[0]);
// console.log(hourajust);
let texto = 'recebi um texto';
if(texto){
    return console.log( texto += texto + '\n' + 'nova informação');
}else {
    texto = 'recebendo um texto';
    return console.log(texto)
}


