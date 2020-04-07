const numero = Number(prompt("Digite um número: "));

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> seu numero + 2 é ${numero + 2}. </p>`;
raizQuadrada.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
checaNumero.innerHTML = `<p>É NaN: ${isNaN(numero)}</p>`;
arredondaBaixo.innerHTML = `<p>Arredonda para baixo: ${Math.floor(numero)}</p>`;
arredondaCima.innerHTML = `<p>Arredonda para cima: ${Math.ceil(numero)}</p>`;
duasCasasDecimais.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)} </p>`;