/* 7.Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/

let produtos = [

    {nome: "A",
     preço: 32,
     desconto: "10%",
    },

    {nome: "B",
    preço: 55,
    desconto: "20%",
       },

    {nome: "C",
     preço: 12,
     desconto: "25%",
    },  

]
const novoDesconto ="10%"

produtos.forEach(valorDesconto =>{
      if(valorDesconto.desconto != "10%"){
        console.log(valorDesconto.desconto = "10%")
} else {
    valorDesconto.desconto = produtos.desconto
}
})
console.log(produtos)