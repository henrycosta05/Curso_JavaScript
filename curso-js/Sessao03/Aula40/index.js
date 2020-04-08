function getTextWeekDay(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Domingo';
        case 2:
            return diaSemanaTexto = 'Segunda-feira';
        case 3:
            return diaSemanaTexto = 'Terça-feira';
        case 4:
            return diaSemanaTexto = 'Quart-feira';
        case 5:
            return diaSemanaTexto = 'Quinta-feira';
        case 6:
            return diaSemanaTexto = 'Sexta-feira';
     
        default:
            return diaSemanaTexto = '';
    }
}

const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return;
    case 1:
        diaSemanaTexto = 'Domingo';
        return;
    case 2:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 3:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quart-feira';
        break;
    case 5:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sexta-feira';
        break;      
    default:
        diaSemanaTexto = '';
        break;
}

if(diaSemana === 0){
    diaSemanaTexto = 'Domingo';
} else if(diaSemana ===1){
    diaSemanaTexto = 'Segunda-feira';
}else if(diaSemana ===2){
    diaSemanaTexto = 'Terça-feira';
}else if(diaSemana ===3){
    diaSemanaTexto = 'Quarta-feira';
}else if(diaSemana ===4){
    diaSemanaTexto = 'Quinta-feira';
}else if(diaSemana ===5){
    diaSemanaTexto = 'Sexta-feira';
}else if(diaSemana ===6){
    diaSemanaTexto = 'Sábado';
}


console.log(diaSemanaTexto);