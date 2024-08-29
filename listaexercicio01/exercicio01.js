
const prompt = require('prompt-sync')();

/*1. Escreva um programa que recebe um número inteiro e verifica
se ele é par ou ímparutilizando uma estrutura de controle if.*/

 let num = Number(prompt('Informe um número: '))
 if (num %2 == 0){
    console.log(`O número ${num} é par`)
 } if (num %2 != 0 ) {
  console.log (`O número ${num} é impar`)
  }
