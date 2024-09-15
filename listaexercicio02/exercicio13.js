/* Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.*/

let carrinho = {
    
    itens : [
    {
        nome: "mouse",
        qtde: 3,
        preco: 78.5

        },
    { 
        nome: "processador",
        qtde: 5,
        preco: 459.99

    },    
    { 
        nome: "MicroSSD",
        qtde: 10,
        preco: 339.5

    },    

    ]
}

let somaTotal = 0
carrinho.itens.forEach((item) => {
       somaTotal+= item.qtde * item.preco
    
})
console.log(`O valor total da soma dos produtos é: R$ ${somaTotal.toFixed(2)}`)


