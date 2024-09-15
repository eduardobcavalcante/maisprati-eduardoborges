/*Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.*/

let estoque = [

    { produto: "a", qtde : 35, estMinimo : 5},
    { produto: "b", qtde : 21, estMinimo : 2},
    { produto: "c", qtde : 50, estMinimo : 10},
    { produto: "d", qtde : 30, estMinimo : 3},
    { produto: "j", qtde : 100, estMinimo : 20},
    
]

estoque.forEach((itens) => {
    if(itens.estMinimo < 5) {
       
      console.log(`Foram ajustadas as quantidades de produto com estoque menor que 5 e os valores são: ${itens.qtde*(2)}`)
    }
  
})

