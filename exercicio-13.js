/*

Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N

*/

// execute no terminal: node exercicio-13.js
// caso queria testar com outros valores, basta mudar a variável "valorFixo"
function calcularTabuada(N) {
    for (let i = 1; i <= N; i++) {
        console.log("Tabuada de " + i + ":");
        for (let j = 1; j <= 10; j++) {
            console.log(i + " x " + j + " = " + (i * j));
        }
        console.log(""); 
    }
}

let valorFixo = 10; 
calcularTabuada(valorFixo);
