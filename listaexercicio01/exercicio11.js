const prompt = require('prompt-sync')()

/*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma
total utilizando um loop for.*/

let sum = 0

for (let i = 0; i < 5; i++){
  let num = Number(prompt("Informe um número de um total de cinco números: "))  
         sum +=num
    }

console.log(`A soma dos cinco números informados é igual a ${sum}`)