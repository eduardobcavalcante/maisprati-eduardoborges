const prompt = require('prompt-sync')();

/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três
opções. Utilize switch-case para implementar a lógica de cada opção
selecionada.*/

let option = Number(prompt("Digite 1, 2 ou 3, escolha, onde quer tomar seu café da manhã: "))
switch (option) {
    case (option = 1):  
    console.log("Seu café da manhã será servido no quarto")
    break
    case (option = 2):  
    console.log("Seu café da manhã será servido no restaurante do hotel")
    break
    case (option = 3): 
   console.log("Seu café será da manhã será servido na piscina")
   break
}