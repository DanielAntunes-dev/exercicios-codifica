/*

Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

*/

// execute no terminal: node exercicio-06.js
// caso queria testar com outros valores, basta mudar as variáveis "ladoA", "ladoB" e "ladoC"
function verificarTriangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            return "Equilátero";
        } else if (a === b || a === c || b === c) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    } else {
        return "Não forma um triângulo";
    }
}

let ladoA = 3;
let ladoB = 4;
let ladoC = 5;
let tipoTriangulo = verificarTriangulo(ladoA, ladoB, ladoC);

console.log("O triângulo é do tipo: " + tipoTriangulo);
