
const prompt = require('prompt-sync')();

/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

let avg = Number(prompt("Informe o valor da nota de 0 a 10: "))
    if (isNaN(avg) || avg < 0 || avg >10)  {
        console.error("Erro: Por favor, insira uma nota válida (entre 0 e 10 e um número).");
        } else if ((avg>0) && (avg <= 4)) {
        console.log (`A sua nota foi ${avg}, você está reprovado.`) 
        } else if ((avg>4) && (avg <= 6)) {
        console.log(`A sua nota foi ${avg}, você está de recuperação.`)
        } else {
        console.log (`A sua nota foi ${avg}, você foi aprovado.`)
    }