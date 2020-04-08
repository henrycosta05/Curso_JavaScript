function meuEscopo(){
    const form = document.querySelector('.imcForm');

    const peso = document.querySelector('#peso');

   

    const altura = document.querySelector('#altura');

    let exibeResultadoImc = document.querySelector('.exibeResultadoImc');
    
    function recebeEventoForm(evento){
        evento.preventDefault();
        
       

        let resultadoImc = peso.value/(altura.value ** 2);

        
        console.log(`imc = ${resultadoImc}`);

        let statusimc ;
        if(resultadoImc>=30){
            // document.getElementById('.exibeResultadoImc').style.backgroundColor = 'red';
            exibeResultadoImc.style.backgroundColor =   '#C41619'; //vermelho
            statusimc = 'Obesidade grau 3'
        } else if(resultadoImc >=25.5 && resultadoImc <30){
            exibeResultadoImc.style.backgroundColor =   '#FFBF20'; //amarelo
            statusimc = 'Obesidade grau 2'
        }else if(resultadoImc >=18.5 && resultadoImc <25){
            exibeResultadoImc.style.backgroundColor =   '#1EFF26'; //verde
            statusimc = 'Peso normal'
        }else {
            exibeResultadoImc.style.backgroundColor =   '#FF4314'; //Laranha
            statusimc = 'Abaixo do peso'
        }

        exibeResultadoImc.innerHTML = `<p>O seu IMC é: ${resultadoImc} e você está ${statusimc}</p>`





    }

    form.addEventListener('submit',recebeEventoForm)
}

meuEscopo();