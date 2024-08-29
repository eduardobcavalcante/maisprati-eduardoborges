 const prompt = require('prompt-sync')();



/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os
lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o
tipo de triângulo: Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: 
A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

let side1 = Number(prompt('Informe o valor de 1º lado: '))
let side2 = Number(prompt('Informe o valor de 2º lado: '))
let side3 = Number(prompt('Informe o valor de 3º lado: '))
 
if((side1 < side2 + side3) && (side2 < side1 + side3) && (side3 < side1 + side2)){
  console.log(`Os lados ${side1}, ${side2} e ${side3} formam um triangulo.`)

  //classificando o triângulo
    if ((side1 === side2) && (side2 === side3)) {
      console.log(`O triângulo é equilátero.`)
  } else if ((side1 == side2) || (side1 === side3) || (side2 === side3)) {
    console.log(`O triângulo é isósceles.`)
  } else { 
    console.log(`O triângulo é escaleno.`)
  } 
  } else { 
    console.log(`Os lado ${side1}, ${side2} e ${side3} não formam um triângulo.`)
}