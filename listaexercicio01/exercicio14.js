const prompt = require ("prompt-sync")()

/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

let contador = 1
let resultado = 1
let num = Number(prompt("Informe um numero para calcular seu fatorial: "))

while(contador<=num){
resultado *= contador
contador++

}
console.log(`O resultado do fatorial${num}, é: ${resultado}`)
