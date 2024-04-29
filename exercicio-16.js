/*

Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.

*/

// execute no terminal: node exercicio-16.js
function ehPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }

    return true;
}

function gerarNumerosPrimos() {
    let contador = 0;
    let contadoNum = 101;

    while (contador < 50) {
        if (EhPrimo(contadoNum)) {
            console.log(contadoNum);
            contador++;
        }
        contadoNum++;
    }
}

gerarNumerosPrimos();
