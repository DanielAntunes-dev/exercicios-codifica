/*

Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.

*/

// execute no terminal: node exercicio-08.js
// caso queria testar com outros valores, basta mudar as variáveis "numero1", "numero2"
function ordenarValores(a, b) {
    if (a < b) {
        return [a, b];
    } else {
        return [b, a];
    }
}

let numero1 = 20; 
let numero2 = 10; 
let numerosOrdenados = ordenarValores(numero1, numero2);


console.log("Números em ordem crescente: " + numerosOrdenados.join(", "));
