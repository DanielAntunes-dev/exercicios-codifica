/*

Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:

                  ### Código de origem:
    1- Sul                5 ou 6      -   Nordeste
    2- Norte              7,8 ou 9    -   Sudeste
    3- Leste              10 até 20   -   Centro-Oeste
    4- Oeste              25 até 50   -   Nordeste
    Fora dos intervalos - Produto Importado
*/

// execute no terminal: node exercicio-09.js
// caso queria testar com outros valores, basta mudar a variável "codigoProduto"
function imprimirRegiaoProduto(codigo) {
    let regiao;
    switch (true) {
        case (codigo >= 5 && codigo <= 6):
            regiao = "Nordeste";
            break;
        case (codigo >= 7 && codigo <= 9):
            regiao = "Sudeste";
            break;
        case (codigo >= 10 && codigo <= 20):
            regiao = "Centro-Oeste";
            break;
        case (codigo >= 25 && codigo <= 50):
            regiao = "Nordeste";
            break;
        default:
            regiao = "Produto importado";
    }
    console.log("Região do produto: " + regiao);
}

let codigoProduto = 8; 
imprimirRegiaoProduto(codigoProduto);
