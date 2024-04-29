/*
Faça umalgoritmo que leia quatro números inteiros e realize as seguintes operações: 
● Some 25 ao primeirointeiro; 
● Triplique o valor do segundo inteiro; 
● Modifiqueovalor do terceiro inteiro para 12% do valor original; 
● Armazenenoquartointeiro a somadosvalores originais (os que o usuário digitou) dos primeiros três inteiros.
*/

// execute no terminal: node exercicio-03.js
// caso queria testar com outros valores, basta mudar os parâmentros na variável "resultadoOperacoes"
function operacoesNumerosInteiros(num1, num2, num3, num4) {
    num1 += 25;
    num2 *= 3;
    num3 *= 0.12;
    num4 = num1 + num2 + num3;
    return [num1, num2, num3, num4];
}

let resultadoOperacoes = operacoesNumerosInteiros(10, 20, 30, 0);


console.log("Resultados: " + resultadoOperacoes.join(", "));
