/* 
Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. 
Calcular e escrever o percentual que cada um representa emrelação aototal de eleitores.
*/

// execute no terminal: node exercicio-02.js
// caso queria testar com outros valores, basta mudar as variáveis qtdEleitores, votosBrancos, votosNulos, votosValidos

function calcularPercentual(votos, totalEleitores) {
    return (votos / totalEleitores) * 100;
}

let qtdEleitores = 200;
let votosBrancos = 10;
let votosNulos = 20;
let votosValidos = 160;

let percentualBrancos = calcularPercentual(votosBrancos, qtdEleitores);
let percentualNulos = calcularPercentual(votosNulos, qtdEleitores);
let percentualValidos = calcularPercentual(votosValidos, qtdEleitores);

console.log("Percentual de votos brancos: " + percentualBrancos + "%");
console.log("Percentual de votos nulos: " + percentualNulos + "%");
console.log("Percentual de votos válidos: " + percentualValidos + "%");
