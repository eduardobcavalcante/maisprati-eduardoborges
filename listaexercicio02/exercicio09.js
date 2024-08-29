/*Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

cliente = [

    {
        nome: "joel",
        idade: 21,
        cidade: "banabuiu",
    },
    {
        nome: "rael",
        idade: 33,
        cidade: "belalu",
    },
    {
        nome: "biel",
        idade: 51,
        cidade: "tamoio",
    },

]
let count = 0
cliente.forEach ((idades) => {
    if( idades.idade > 30){
       count++
     }
   
    })
    console.log(`O total de clientes que tem mais de 30 anos é(são): ${count}`)




    
        
