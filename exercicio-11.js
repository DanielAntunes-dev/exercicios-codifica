/*

Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.

*/

// execute no terminal: node exercicio-11.js
// caso queria testar com outros valores, basta mudar a variável "numeroTeste"
function identificarParOuImpar(numero) {
    if (numero === 0) {
        return "NULO";
    } else if (numero < 0) {
        return "NEGATIVO";
    } else if (numero % 2 === 0) {
        return "PAR";
    } else {
        return "ÍMPAR";
    }
}

let numeroTeste = 7; 
console.log(numeroTeste + " é " + identificarParOuImpar(numeroTeste));
