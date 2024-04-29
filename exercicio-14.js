/*

Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.

*/

// execute no terminal: node exercicio-14.js
// caso queria testar com outros valores, basta mudar a variável array de "numeros"
function calcularMediaAritmetica(numeros) {
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  const media = soma / numeros.length;
  return media.toFixed(2);
}

let numeros = [4.5, 7.8, 6.2, 9.1, 5.4];

const media = calcularMediaAritmetica(numeros);

console.log("A média aritmética dos números fornecidos é: " + media);
