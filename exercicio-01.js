/*
Escreva um algoritmo para ler uma temperatura em graus Celsius, 
calcular e escrever o valor correspondente em graus Fahrenheit.
*/

// execute no terminal: node exercicio-01.js
// caso queria testar com outra temperatura em celsius, basta mudar a variavel "temperaturaCelsius"

function celsiusParaFahrenheit(temperaturaCelsius) {
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    return temperaturaFahrenheit;
}

let temperaturaCelsius = 150;
let temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);


console.log("Temperatura em Fahrenheit: " + temperaturaFahrenheit);
