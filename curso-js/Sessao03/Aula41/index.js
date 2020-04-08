/**
 * Atribuição por desestruturação de arrays
 * se quiser pular algum item, tem que deixar o espaço em branco
 * para pegar o resto do array tem que colocar os ...<nomevariavel>
 *  
 */

 const arr = ["felipe","mathias","rodrigo","diego"];


 const [a , b , ...resto] = arr;

 console.log(resto)


 const numeros = [
     [1,2,3],[4,5,6],[7,8,9]
 ];



 const [, [ , y]] = numeros; //formato mais complexo onde é necessário contar os elementos de um array para acessá-los
 console.log(y)

 const [lista1,lista2,lista3] = numeros; //Formato mais usual onde se atribui os subarrays em variáveis para acessá-los via variável

 console.log(lista3[2]);