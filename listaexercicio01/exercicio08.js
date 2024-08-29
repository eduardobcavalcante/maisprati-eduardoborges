const prompt = require('prompt-sync')();

/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores
iguais) e escreve-los em ordem crescente.*/

let num1 = Number(prompt("Informe um número: "))
let num2 = Number(prompt("Informe outro número, diferente do primeiro: "))

if(num1 > num2){
  console.log(`A sequencia de números é: ${num2}, ${num1}`)
} else {
  console.log(`A sequência de números é: ${num1}, ${num2}`)
}