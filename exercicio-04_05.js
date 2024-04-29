/*
Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).

Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0

*/

// execute no terminal: node exercicio-04_05.js
// caso queria testar com outros valores, basta mudar as variáveis "nota1" e "nota2"
function verificarAprovacao(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    if (media >= 6.0) {
        return "PARABÉNS! Você foi aprovado";
    } else {
        return "Você foi REPROVADO! Estude mais";
    }
}

let nota1 = 7;
let nota2 = 5;
let resultado = verificarAprovacao(nota1, nota2);

console.log(resultado);
