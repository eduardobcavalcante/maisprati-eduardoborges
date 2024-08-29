const prompt = require('prompt-sync')()

/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de
uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso,
obesidade) utilizando if-else.*/

let weidth = Number(prompt('Informe seu peso atual: '))
let hight = Number(prompt('Informe seu peso altura: '))
let imc = (weidth /(hight * hight)).toFixed(2)

    if (imc < 18.5) {
        console.log (`O seu imc é ${imc}, você está com baixo peso.`) 
        } else if ((imc>=18.6) && (imc <= 24.9)) {
        console.log(`O seu imc é ${imc}, você está com peso normal.`)
        } else if ((imc>=25) && (imc <= 29.9)) {
        console.log(`O seu imc é ${imc}, você está com sobrepeso.`)
        } else if ((imc>=30) && (imc <= 34.9)) {
        console.log(`O seu imc é ${imc}, você está com Obesidade grau I.`)
        } else if ((imc>=35) && (imc <= 39.9)) {
            console.log(`O seu imc é ${imc}, você está com Obesidade grau II.`)
        } else {
        console.log (`O seu imc é ${imc}, você está com oboesidade grau III.`)
    }