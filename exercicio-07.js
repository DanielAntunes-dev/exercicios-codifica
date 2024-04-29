/*

As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.

*/

// execute no terminal: node exercicio-07.js
// caso queria testar com outros valores, basta mudar a variável "numeroMacas"
function calcularValorCompraMacas(numeroMacas) {
    let valorTotal;
    if (numeroMacas < 12) {
        valorTotal = numeroMacas * 0.30;
    } else {
        valorTotal = numeroMacas * 0.25;
    }
    return valorTotal;
}

let numeroMacas = 15; 
let valorCompra = calcularValorCompraMacas(numeroMacas);

console.log("Valor total da compra: R$" + valorCompra.toFixed(2));
