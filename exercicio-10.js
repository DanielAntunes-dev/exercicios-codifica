/*

Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

// execute no terminal: node exercicio-10.js
// caso queria testar com outros valores, basta mudar a variável "numero"
function escreverNumeroDezVezes(numero) {
    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
}

let numero = 15; 
escreverNumeroDezVezes(numero);
