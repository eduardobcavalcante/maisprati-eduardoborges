const prompt = require('prompt-sync')();
/*2. Crie um programa que classifica a idade de uma pessoa em categorias
(criança, adolescente, adulto, idoso) com base no valor fornecido, 
utilizando uma estrutura de controle if-else.*/

let age = Number(prompt("Informe a sua idade: "))
    if (isNaN(age) || age <= 0) {
    console.error("Erro: Por favor, insira uma idade válida (maior que 0 e um número).");
    } else if ((age>0) && (age <= 11)) {
    console.log (`A sua idade é ${age} anos, você é uma criança.`) 
    } else if ((age>11) && (age <= 17)) {
    console.log (`A sua idade é ${age} anos, você é um adolescente.`)
    } else if ((age>17) && (age <= 59)) {
        console.log (`A sua idade é ${age} anos, você é um adulto.`)
    } else {
        console.log (`A sua idade é ${age} anos, você é um idoso(a).`)
    }