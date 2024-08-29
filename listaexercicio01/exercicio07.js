const prompt = require('prompt-sync')();

/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 
se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

let amountApple = Number(prompt("Informe quantas maçãs quer adicionar no pedido: "))
/*Operador ternário, considerando fazendo a relação entre quantidade de maçãs
e o preço de cada unidade*/
let price = (amountApple < 12 ? 0.3 : 0.25).toFixed(2)
let orderValue = amountApple * price
console.log(`Ao compra ${amountApple} maçã(ãs) o valor da compra é R$ ${orderValue}`)