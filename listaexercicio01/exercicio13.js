const prompt = require ("prompt-sync")()

/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 
e fazer a média aritmética desses números.*/

let numeros
let sum = 0
let count = 0

do {
  numeros = parseFloat(prompt("Informe o valor de um numero: "))
  
  if(numeros !== 0){
  sum +=numeros
  count++
}

} while( numeros != 0)

let media = (count > 0 ? sum/count : 0)

console.log(`A média aritimética é: ${media}`)   