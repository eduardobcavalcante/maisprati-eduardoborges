const prompt = require('prompt-sync')()

/*12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário
(de 1 a 10) utilizando um loop for.*/

let num = Number(prompt("Informe um número de 1 a 10 para montar a tabuada: "))
if ((num >0) && (num <=10)){
for (let i = 1; i <= 10; i++){
  console.log(` A tabuada de ${num} * ${i} = ${num * i} `) 
  }
}else {
  console.log(`Você informou o número: ${num}, por favor informe um número entre 1 e 10 `)
}