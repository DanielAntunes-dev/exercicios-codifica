/*

Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.

*/

// execute no terminal: node exercicio-15.js
// caso queria testar com outros valores, basta mudar as variáveis "numerosTeste" "pesosTeste", dois array
function calcularMediaPonderada(numeros, pesos) {
    let somaProdutos = 0;
    let somaPesos = 0;

    for (let i = 0; i < numeros.length; i++) {
        somaProdutos += numeros[i] * pesos[i];
        somaPesos += pesos[i];
    }

    const media = somaProdutos / somaPesos;
    return media.toFixed(2);
}

let numerosTeste = [4.5, 7.8, 6.2, 9.1, 5.4];

let pesosTeste = [1, 2, 1, 3, 2];

const mediaPonderada = calcularMediaPonderada(numerosTeste, pesosTeste);

console.log("A média ponderada dos números fornecidos é: " + mediaPonderada);
