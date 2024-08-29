const prompt = require ("prompt-sync")()

/* 15. Escreva um programa que gera e imprime os primeiros 10 números da
 sequência de Fibonacci utilizando um loop for. */

 // Inicializando as duas primeiras variáveis da sequência de Fibonacci
 let fiboAnterior = 1; 
 let fiboAtual = 1;
 
 console.log("Os primeiros 10 números da sequência de Fibonacci são: ");
 
 // Usando um loop for para gerar e imprimir os 10 primeiros números da sequência
 for (let i = 1; i <= 10; i++) {
   console.log(fiboAnterior);  // Imprime o valor atual de 'a'
   
   let fibo = fiboAnterior + fiboAtual;  // Calcula o próximo número na sequência
   fiboAnterior = fiboAtual;  // Atualiza 'a' para o próximo valor na sequência
   fiboAtual = fibo;  // Atualiza 'b' para o próximo valor na sequência
 }
 