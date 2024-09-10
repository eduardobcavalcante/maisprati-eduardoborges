/* Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */

venda = [
    {produto: "a",
     quantidade: 3,
     valor: 8,
},
    {produto: "b",
     quantidade: 10,
     valor: 7.23,
},
    {produto: "c",
     quantidade: 1,
     valor: 45,
},

]

somaValor = 0
venda.forEach((item)=>{ 
    somaValor+= (item.quantidade * item.valor)
    })
    console.log(`A valor total das vendas é R$ ${somaValor.toFixed(2)}`)